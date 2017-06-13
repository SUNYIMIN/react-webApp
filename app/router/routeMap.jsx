import React from "react";
import {Router, Route, hashHistory,IndexRoute} from "react-router";


//根据路由切换的各个组件
import App from "../containers";
import Home from "../containers/Home";
import City from "../containers/City";
import Search from "../containers/Search";


class RouterMap extends React.Component{
    render(){
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                  <IndexRoute component={Home} />
                  <Route path="/city" component={City} />
                  <Route path="/search/:category(/:keyword)" component={Search} />
                </Route>
            </Router>
        )
    }
}

export default RouterMap;