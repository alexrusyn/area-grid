import { useState, useEffect, useRef } from "react";

import { useListener } from "./index";
import { getSnapItem } from "../lib/utilityFigure";

const useResize = (ref, initialItem, mouse) => {
  const [isResize, setIsResize] = useState(false);
  const item = useRef(initialItem);

  const handlerMouseDown = (e) => {
    if (e.target.getAttribute("data-resize")) {
      setIsResize(true);
    }
  };

  const handlerMouseUp = (e) => {
    setIsResize(false);
  };

  useListener("mousedown", handlerMouseDown, {}, ref);
  useListener("mouseup", handlerMouseUp);

  useEffect(() => {
    if (isResize) {
      item.current = getSnapItem(36, {
        x: item.current.x,
        y: item.current.y,
        w: mouse.x - item.current.x,
        h: mouse.y - item.current.y
      });
    }
  }, [isResize, mouse]);

  return [isResize, item.current];
};

export default useResize;
