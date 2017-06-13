import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from "../../components/HomeHeader";
import Carousel from "../../components/Carousel";
import {connect} from "react-redux";
import Ad from "./subpage/ad";
import {hashHistory} from "react-router";
import List from "./subpage/list";

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} searchHandle={this.searchHandle.bind(this)}/>
                <Carousel />
                <div style={{height:15}}></div>
                <Ad />
                <div style={{height:15}}></div>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
    searchHandle(value){
       hashHistory.push("/search/all"+"/"+encodeURIComponent(value));
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
)(Home);
