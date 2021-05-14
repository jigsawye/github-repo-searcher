import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

const useResetScrollTop = (): void => {
  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export { useResetScrollTop };
