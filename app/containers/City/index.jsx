import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from "react-redux";
import CityHeader from "../../components/CityHeader"
import CurrentCity from "../../components/CurrentCity"
import CityList from "./subpage/citylist.jsx"
class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
               <CityHeader title="选择当前城市"/>
               <CurrentCity cityName={this.props.userInfo.cityName}/>
               <CityList />
            </div>
        )
    }
}
  function mapStateToProps(state){
      return {
          userInfo:state.userinfo
      }
  }
  function mapDispatchToProps(dispatch){
      return {
         
      }
  }
export default connect(
      mapStateToProps,
      mapDispatchToProps
)(City);
