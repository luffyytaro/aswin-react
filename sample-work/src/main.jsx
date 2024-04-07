import ReactDom from "react-dom/client";
import "./style.css";

import App from "./app";

const root = document.getElementById("root");
ReactDom.createRoot(root).render(<App/>);