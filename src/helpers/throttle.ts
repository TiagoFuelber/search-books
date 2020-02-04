/* eslint-disable @typescript-eslint/no-explicit-any */
export const throttle = (
  func: (args: any) => any,
  limit: number
): ((args: any) => void) => {
  let inThrottle: boolean;
  return function(...args: any): void {
    if (!inThrottle) {
      func.apply(this, [...args]);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
