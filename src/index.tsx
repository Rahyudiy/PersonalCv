import React from "react";
import ReactDOM from "react-dom/client";
import App  from "./App";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./navbar";

/*const [nama,setNama] = useState("");*/

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <div>
    <BrowserRouter>
    <Navbar />
    <App />
    </BrowserRouter>
  </div>
  // </React.StrictMode>
);

