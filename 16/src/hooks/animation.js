export const useAnimation = () => {
  const animate = ({
    update = () => null,
    start = () => null,
    done = () => null,
    totalTime = 1000,
  }) => {
    const run = () => {
      start && start();

      let fromStart = 0;
      let lastTime = Date.now();

      const tick = () => {
        const now = Date.now();
        const delta = now - lastTime;
        fromStart += delta;

        update && update(totalTime, fromStart);

        lastTime = now;

        if (fromStart >= totalTime) {
          done && done();
        } else {
          requestAnimationFrame(tick);
        }
      }

      tick();
    }

    return {
      run,
    }
  }

  return animate;
}
