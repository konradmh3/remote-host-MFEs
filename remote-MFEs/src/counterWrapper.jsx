import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";

import "./index.scss";

const CounterWrapper = (container) => {
    const root = createRoot(container);
    root.render(<Counter />);
}

export default CounterWrapper;