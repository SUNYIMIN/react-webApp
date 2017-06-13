// home-分类
import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from "../../../fetch/home/home"
import HomeAd from "../../../components/HomeAd"
class Ad extends React.Component{
    constructor(props,context){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    render(){
        return (
            <div>
               {
                   this.state.data.length === 0 ? 
                   <div>加载中...</div> : 
                   <HomeAd data={this.state.data}/>
                 }
            </div>
        )
    }
    componentDidMount(){
        var result = getAdData();
        result.then((res) => {
            return res.json();
        }).then((json)=>{
            var data = json;
            if(data){
                this.setState({
                    data:data
                })
            }
        }).catch(ex => {
           if(__DEV__){
               console.error("首页广告数据获取失败",ex.message);
           }
        })
    }

} 

export default Ad;