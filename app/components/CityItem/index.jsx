import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"
class CityItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        var {data} = this.props;
        return (
            <div id="hotCity">
               <h3>热门城市</h3>
               <ul className="cityList clear-fix">
                   {
                       data.map((item,index) =>{
                           return <li key={index} onClick={this.setCityName.bind(this,item.cityNme)}>{item.cityNme}</li>
                       })
                   }
               </ul>
            </div>
        )
    }
    setCityName(cityName) {
        this.props.cityHandle(cityName);
    }
}

export default CityItem;