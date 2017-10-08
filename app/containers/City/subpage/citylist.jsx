import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userInfoActionCreator from "../../../actions/userinfo.js";
import {getCityItem} from "../../../fetch/home/home"
import CityItem from "../../../components/CityItem"
import {hashHistory} from "react-router"
import {CITYNAME} from "../../../config/localStorageKey.js";
import localStorage from "../../../util/localstore.js";

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    
    render() {
        return (
            <div>
            {this.state.data.length === 0 ? <div>加载中...</div> : 
                <CityItem  data={this.state.data} cityHandle={this.cityHandle.bind(this)}/>}
            </div>
        )
    }
    componentDidMount(){
        var result = getCityItem();
        result.then( res => {
            return res.json()
        }).then( json => {
            var data = json
            if(data){
                this.setState({
                    data:data
                })
            }
        })
    }
    cityHandle(cityName) {
       //修改redux
       this.props.uesrInfoAction.update({
           cityName:cityName
       })

       //设置localstroage
        localStorage.setItem(CITYNAME,cityName);

       //返回首页
        hashHistory.push("/");
    }

}
  function mapStateToProps(state){
      return {
          userInfo:state.userinfo
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
)(CityList);
