import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from "react-router"
import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            value:""
        }
    }
    render() {
        return (
            <div id="header-background" className="clear-fix">
                 <div className="float-left">
                    <span><Link to="/city">{this.props.cityName}</Link></span>
                    <i className="icon-angle-down"></i>
                 </div>
                 <div className="float-right">
                    <i className="icon-user"></i>
                 </div>
                 <div className="search-middle">
                    <i className="icon-search"></i>
                    <input type="text" placeholder="请输入关键字..."
                      onChange={this.changeHandle.bind(this)}
                      value={this.state.value}
                      onKeyUp={this.searchHandle.bind(this)}
                    />
                 </div>
            </div>
        )
    }
    changeHandle(ev){
      ev.preventDefault();
        this.setState({
            value:ev.target.value
        })
    }
    searchHandle(ev){
        if(ev.keyCode !== 13){
              return;
        }
        this.props.searchHandle(this.state.value);
    }
}

export default HomeHeader;
