import React from "react";
import styled from "styled-components";

import { getFigureStyle } from "../lib/utilityFigure";

const Wrapper = styled.span`
  position: absolute;
  display: block;
  background: rgba(113, 144, 213, 0.5);
`;

const FigurePreview = () => (
  <Wrapper
    style={getFigureStyle({
      x: 36,
      y: 36,
      w: 72,
      h: 72
    })}
  ></Wrapper>
);

export default FigurePreview;
