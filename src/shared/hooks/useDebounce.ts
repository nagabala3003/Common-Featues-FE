import { useRef, useEffect } from 'react';

function useDebounce({ cb, delay }: { cb: (...args: any) => void, delay: number }) {
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      // Cleanup timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (...args: any) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default useDebounce;
