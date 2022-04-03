import React from "react";
import styled from "styled-components";

const Item = styled.span`
  position: absolute;
  display: block;
  width: 8px;
  height: 8px;
  border: 2px solid #4570cf;
  background: #7190d5;
  z-index: 2;

  ${({ position }) => position && position};
  ${({ cursors }) => cursors && cursors}
`;

const ResizeItem = (props) => <Item data-resize {...props} />;

export default ResizeItem;
