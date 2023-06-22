import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { firebaseInit } from "firestore";
firebaseInit();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
