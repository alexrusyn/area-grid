import { useEffect, useRef, useCallback } from "react";

const useSavedCallback = (callback, defaultValue = null) => {
  const noop = useCallback(() => defaultValue, [defaultValue]);
  const savedCallback = useRef(noop);

  useEffect(() => {
    if (callback) {
      savedCallback.current = callback;
    }
  }, [callback]);

  return savedCallback.current;
};

export default useSavedCallback;
