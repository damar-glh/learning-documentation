import React from "react";
import {RouterProvider} from "react-router-dom";
import {createRoot} from "react-dom/client";
import "./index.css";
import router from "./Router/Index.jsx";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);