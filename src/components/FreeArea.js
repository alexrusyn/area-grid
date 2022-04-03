import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import GridBackground from "./GridBackground";
import Figure from "./Figure";
import FigurePreview from "./FigurePreview";

import Box from "./Box";

import {
  getItem,
  getSnapCoords,
  getItemFromGrid,
  getCoords
} from "../lib/utilityFigure";

import { useMouse, useCreateBox } from "../hooks";

// redux
const options = {
  size: 36,
  width: 36 * 12,
  height: 36 * 12
};

const Wrapper = styled.div`
  position: relative;
  width: ${options.width}px;
  height: ${options.height}px;
  margin: 0 auto;
  user-select: none;
`;

const getGridSnapCoords = getSnapCoords.bind(null, options.size);

const FreeArea = () => {
  const wrapperRef = useRef(null);
  const [wasBoxCreated, setWasBoxCreated] = useState(false);

  const [container, setContainer] = useState(getItem(0, 0, 0, 0));
  const mouse = useMouse(wrapperRef, getGridSnapCoords);
  const [isCreating, item, preview] = useCreateBox({
    container,
    mouse,
    // canCreate: () => !wasBoxCreated,
    end: () => setWasBoxCreated(true)
  });

  // console.log(isCreating, item, preview);

  useEffect(() => {
    setContainer(getCoords(wrapperRef.current));
  }, [wrapperRef]);

  return (
    <Wrapper ref={wrapperRef}>
      <FigurePreview />
      {/* <Box
        container={container}
        item={item}
        mouse={(options.size, mouse)}
      >
        <Figure />
      </Box> */}
      <GridBackground options={options} />
    </Wrapper>
  );
};

export default FreeArea;
