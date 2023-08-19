import './css/intro.css';
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from './routes/BrowserRouter';
import { Provider } from "react-redux";
import { store } from "./Redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Routes />
    </Provider>
);
