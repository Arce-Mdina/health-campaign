// // utils/scroll.ts
// export const scrollTo = (
//   target: string | Element,
//   options: {
//     offset?: number;
//     delay?: number;
//     behavior?: ScrollBehavior;
//   } = {}
// ): void => {
//   const { offset = 0, delay = 0, behavior = 'smooth' } = options;

//   setTimeout(() => {
//     let element: Element | null;

//     if (typeof target === 'string') {
//       element = document.querySelector(target);
//     } else {
//       element = target;
//     }

//     if (element) {
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
//       const scrollPosition = elementPosition - offset;
//       window.scrollTo({
//         top: scrollPosition,
//         behavior,
//       });
//     } else {
//       console.warn(`Element not found: ${target}`);
//     }
//   }, delay);
// };

// utils/scroll.ts
type ScrollTarget = string | Element;

interface ScrollOptions {
  offset?: number;      // vertical offset in px
  delay?: number;       // ms before starting
  duration?: number;    // total animation time in ms
}

export const scrollTo = (
  target: ScrollTarget,
  options: ScrollOptions = {}
): void => {
  const {
    offset = 0,
    delay = 0,
    duration = 600,
  } = options;

  setTimeout(() => {
    // resolve the element
    const element =
      typeof target === 'string'
        ? document.querySelector<HTMLElement>(target)
        : (target as HTMLElement);

    if (!element) {
      console.warn(`Element not found: ${target}`);
      return;
    }

    const startY = window.pageYOffset;
    const targetRect = element.getBoundingClientRect();
    const endY = targetRect.top + startY - offset;
    const distance = endY - startY;
    const startTime = performance.now();

    // easing function: easeInOutQuad
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, delay);
};