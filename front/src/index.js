import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const info = {
  name: "shin",
  age: 28,
};
const InfoContext = createContext(info);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <InfoContext.Provider value={info}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </InfoContext.Provider>
);

export default InfoContext;
