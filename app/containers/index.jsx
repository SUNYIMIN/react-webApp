import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import localStorage from "../util/localstore.js";
import {CITYNAME} from "../config/localStorageKey.js";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userInfoActionCreator from "../actions/userinfo.js";



class App extends React.Component{
    constructor(props,context){
        super(props);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            initDo:false
        }
    }
    render(){
        return (
            <div>
              {
                this.state.initDo ? this.props.children : <p>加载中...</p>
              }
            </div>
        )
    }
    componentDidMount(){
       var cityName = localStorage.getItem(CITYNAME);
          if(cityName == null){
               cityName = "北京";
          } 
        this.props.uesrInfoAction.update({
            cityName:cityName
        })
        this.setState({
            initDo:true
        })  
    }
}
  function mapStateToProps(state){
      return {
         
      }
  }

  function mapDispatchToProps(dispatch){
      return {
          uesrInfoAction : bindActionCreators(userInfoActionCreator,dispatch)
      }
  }
export default connect(
      mapStateToProps,
      mapDispatchToProps
)(App);