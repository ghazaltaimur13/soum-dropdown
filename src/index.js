import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading ...</div>}>
        <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
