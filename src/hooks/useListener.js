import { useEffect, useRef } from "react";

const useListener = (eventName, callback, options = {}, element = null) => {
  const savedElement = useRef(null);
  const savedCallback = useRef(null);

  useEffect(() => {
    savedElement.current = (element && element.current) || document;
  }, [element]);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const currentElement = savedElement.current;

    currentElement.addEventListener(eventName, savedCallback.current, options);

    return () => {
      currentElement.removeEventListener(
        eventName,
        savedCallback.current,
        options
      );
    };
  }, [savedElement, eventName, savedCallback, options]);
};

export default useListener;
