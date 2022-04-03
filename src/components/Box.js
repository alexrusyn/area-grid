import React, { useRef, useMemo } from "react";
import styled from "styled-components";

import ResizeItem from "./ResizeItem";

import { useResize } from "../hooks";
import { RESIZE_ITEM_POSITION, RESIZE_ITEM_CURSOR } from "../lib/constants";
import { getPositionStyle, getCursorStyle } from "../lib/utilityBox";
import { getFigureStyle } from "../lib/utilityFigure";

const BoxWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const renderResizeItems = (positions, cursors) =>
  positions.map((position, index) =>
    useMemo(
      () => (
        <ResizeItem
          key={position}
          position={getPositionStyle(position, -4)}
          cursors={getCursorStyle(cursors, index)}
        />
      ),
      [position, index]
    )
  );

const Box = ({ container, item, mouse, children }) => {
  const boxRef = useRef(null);
  const [isResize, resizeItem] = useResize(boxRef, item, {
    x: mouse.x - container.x,
    y: mouse.y - container.y
  });

  console.log(mouse);

  return (
    <BoxWrapper style={getFigureStyle(resizeItem)} ref={boxRef}>
      {renderResizeItems(RESIZE_ITEM_POSITION, RESIZE_ITEM_CURSOR)}
      <Content>{children}</Content>
    </BoxWrapper>
  );
};

export default Box;
