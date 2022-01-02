import React from "react";
import {render} from "react-dom";
import Counter from "./counter.js";
import { store } from "./store.js";
import { Provider } from "react-redux";

function App() {
    return <Counter />;
}

render(<Provider store={store}><App /></Provider>, document.querySelector("#react-root"));
