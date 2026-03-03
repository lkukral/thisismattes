const players = Array.from(document.querySelectorAll("[data-audio-player]"));

if (players.length > 0) {
  let active = null;
  let sharedAudio = null;
  let rafId = null;

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${secs}`;
  };

  const getRefs = (player) => ({
    button: player.querySelector(".audio-player__toggle"),
    meta: player.querySelector(".audio-player__meta"),
    fill: player.querySelector("[data-audio-progress]"),
    current: player.querySelector("[data-audio-current]"),
    duration: player.querySelector("[data-audio-duration]"),
    bar: player.querySelector(".audio-player__bar")
  });

  const updateUI = () => {
    if (!active || !sharedAudio) {
      return;
    }

    const refs = getRefs(active);
    const currentTime = sharedAudio.currentTime || 0;
    const total = sharedAudio.duration || 0;
    const progress = total > 0 ? Math.min(currentTime / total, 1) : 0;

    refs.fill.style.transform = `translateX(${(progress - 1) * 100}%)`;
    refs.current.textContent = formatTime(currentTime);
    refs.duration.textContent = formatTime(total);
    refs.bar.setAttribute("aria-valuenow", String(Math.round(progress * 100)));

    if (!sharedAudio.paused) {
      rafId = window.requestAnimationFrame(updateUI);
    }
  };

  const setPlayerState = (player, isPlaying) => {
    const refs = getRefs(player);
    refs.meta.hidden = false;
    refs.button.classList.toggle("is-playing", isPlaying);
    refs.button.setAttribute("aria-pressed", String(isPlaying));
    refs.button.setAttribute(
      "aria-label",
      `${isPlaying ? "Wiedergabe pausieren" : "Track abspielen"}: ${player.dataset.trackTitle || "Track"}`
    );
  };

  const stopActivePlayer = () => {
    if (!active) {
      return;
    }

    setPlayerState(active, false);

    if (sharedAudio) {
      sharedAudio.pause();
    }

    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }

    active = null;
  };

  players.forEach((player) => {
    const { button } = getRefs(player);
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", async () => {
      const src = player.dataset.audioSrc;
      if (!src) {
        return;
      }

      if (!sharedAudio) {
        sharedAudio = new Audio();
        sharedAudio.preload = "none";

        sharedAudio.addEventListener("ended", () => {
          stopActivePlayer();
        });

        sharedAudio.addEventListener("error", () => {
          stopActivePlayer();
        });
      }

      if (active && active !== player) {
        stopActivePlayer();
      }

      if (active === player && !sharedAudio.paused) {
        stopActivePlayer();
        return;
      }

      if (sharedAudio.src !== new URL(src, window.location.origin).href) {
        sharedAudio.src = src;
        sharedAudio.load();
      }

      active = player;
      setPlayerState(player, true);

      try {
        await sharedAudio.play();
        if (rafId) {
          window.cancelAnimationFrame(rafId);
        }
        rafId = window.requestAnimationFrame(updateUI);
      } catch {
        stopActivePlayer();
      }
    });
  });
}
