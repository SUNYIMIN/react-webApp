import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"
class CurrentCity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
             <div className="cuurentcity">
                <h3>{this.props.cityName}</h3>
             </div>
        )
    }
}

export default CurrentCity;