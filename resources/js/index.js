import React from "react";
import ReactDom from "react-dom/client";

import Main from "./components/Main"

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
)
