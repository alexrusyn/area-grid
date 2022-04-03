import { useState, useCallback } from "react";

import { useListener } from "./index";

const useMouse = (element, modifier) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = useCallback(({ x, y }) => {
    setPosition({ x, y });
  }, []);

  useListener("mousemove", updatePosition, {}, element);

  return modifier ? modifier(position) : position;
};

export default useMouse;
