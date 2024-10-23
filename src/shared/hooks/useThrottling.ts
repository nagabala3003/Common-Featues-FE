import { useRef } from 'react';

const useThrottling=({ cb, delay }: { cb: (...args: any) => void, delay: number }) =>{
  const isThrottling = useRef<boolean>(false);

  return (...args: any) => {
    if (!isThrottling.current) {
      cb(...args);  // Call the callback immediately
      isThrottling.current = true; // Start the throttling

      setTimeout(() => {
        isThrottling.current = false; // Allow the next execution after the delay
      }, delay);
    }
  };
}

export default useThrottling;
