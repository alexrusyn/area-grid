import React from "react";
import styled from "styled-components";

import FreeArea from "../components/FreeArea";

const Standard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  height: 768px;
  margin: 0 auto;
`;

const Item = styled.div`
  flex: 1 0 auto;
`;

const StandardScreen = () => (
  <Standard>
    <Item>
      <FreeArea />
    </Item>
    <Item>Feedback</Item>
  </Standard>
);

export default StandardScreen;
