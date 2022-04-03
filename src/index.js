import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./redux";

import StandardScreen from "./screen/standard";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Provider value={store}> */}
    <StandardScreen />
    {/* </Provider> */}
  </StrictMode>,
  rootElement
);
