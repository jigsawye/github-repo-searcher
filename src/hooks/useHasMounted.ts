import { MutableRefObject, useEffect, useRef } from 'react';

const useHasMounted = (): MutableRefObject<boolean> => {
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return hasMounted;
};

export { useHasMounted };
