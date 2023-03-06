import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Counter from "./components/Counter";
import {atom} from "jotai";

const countAtom = atom(0);
export {countAtom};
const App = () => (
  <Counter />
);
ReactDOM.render(<App />, document.getElementById("app"));
