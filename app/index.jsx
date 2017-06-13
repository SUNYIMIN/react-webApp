import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {hashHistory} from "react-router";
import RouterMap from "./router/routeMap";
import configureStore from "./store/configureStore.js";
import "./static/css/common.less";
import "./static/css/font.css";


var store = configureStore();

ReactDOM.render(
    <Provider store={store}>
       <RouterMap history={hashHistory}/>
    </Provider> ,
    document.getElementById("root")
)





