import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"
class CityHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
             <div id="city-header">
                 <i className="icon-chevron-left" onClick={this.backHandle.bind(this)}></i>
                 <h3>{this.props.title}</h3>
             </div>
        )
    }
    backHandle(){
        //回退到上一页
        window.history.back();
    }
}

export default CityHeader;