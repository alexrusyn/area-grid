import { css } from "styled-components";

export const getPositionStyle = (positions, offset) =>
  positions.split("-").map(
    (position) =>
      position &&
      css`
        ${position}: ${offset || 0}px;
      `
  );

export const getCursorStyle = (cursors, index) =>
  css`
    cursor: ${cursors[index]}-resize;
  `;
