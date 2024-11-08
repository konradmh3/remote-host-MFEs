import React from "react";
import ReactDOM from "react-dom/client";
import counterWrapper from "remote/counterWrapper";
import "./index.scss";
import { useRef, useEffect } from "react";

const App = () => {
  const divRef = useRef(null);
  useEffect(() =>{
    counterWrapper(divRef.current);
  }, []);
return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div ref={divRef}>
    </div>
    
  </div>
);
}
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)