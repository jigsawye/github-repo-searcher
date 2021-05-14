import { RefObject, useEffect, useRef } from 'react';

const useInView = (
  callback: () => void
): { ref: RefObject<HTMLDivElement> } => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        }),
      {
        rootMargin: '10%',
      }
    );

    observer.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [callback]);

  return { ref };
};

export { useInView };
