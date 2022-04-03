import React, { useMemo, createRef } from "react";
import styled from "styled-components";

import { useCtx } from "../hooks";
import { drawGrid } from "../lib/utilityCanvas";

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

const GridBackground = ({ options }) => {
  const { size, width, height } = options;

  const bgRef = createRef();
  const ctx = useCtx(bgRef);

  const DPI_WIDTH = width * 2;
  const DPI_HEIGHT = height * 2;

  useMemo(() => {
    if (ctx) {
      drawGrid(ctx, size * 2, DPI_WIDTH, DPI_HEIGHT);
    }

    return null;
  }, [ctx, size, DPI_WIDTH, DPI_HEIGHT]);

  return <Canvas ref={bgRef} width={DPI_WIDTH} height={DPI_HEIGHT} />;
};

export default GridBackground;
