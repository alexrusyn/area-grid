import { useEffect, useRef, useState } from "react";
import { getItem } from "../lib/utilityFigure";

import { useListener, useSavedCallback } from "./index";

const initialItem = getItem(0, 0, 0, 0);

const useCreateBox = ({ container, mouse, canCreate, start, create, end }) => {
  const [isCreating, setIsCreating] = useState(false);
  const item = useRef(initialItem);
  const preview = useRef(initialItem);
  const savedCanCreate = useSavedCallback(canCreate, true);
  const savedStartCallback = useSavedCallback(start);
  const savedCreateCallback = useSavedCallback(create);
  const savedEndCallback = useSavedCallback(end);

  const handlerMouseDown = (e) => {
    if (savedCanCreate()) {
      setIsCreating(true);
      savedStartCallback();
    }
  };

  useEffect(() => {
    if (isCreating && savedCanCreate()) {
      // create here

      savedCreateCallback();
    }
  }, [mouse]);

  const handlerMouseUp = (e) => {
    if (savedCanCreate()) {
      setIsCreating(false);
      savedEndCallback();
    }
  };

  useListener("mousedown", handlerMouseDown);
  useListener("mouseup", handlerMouseUp);

  return [isCreating, item.current, preview.current];
};

export default useCreateBox;
