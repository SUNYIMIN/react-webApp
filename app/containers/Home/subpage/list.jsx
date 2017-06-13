// home-分类
import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from "../../../fetch/home/home"
import ListItem from "../../../components/List"
import LoadingMore from "../../../components/LoadingMore"

class List extends React.Component{
    constructor(props,context){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[],
            hasMore:false,
            isloadingMore:false,
            page:1
        }
    }
    render(){
        return (
            <div>
               {this.state.data.length === 0 ? 
                   <div>加载中...</div> : 
                   <ListItem data={this.state.data}/>
               }
               {this.state.hasMore ? <LoadingMore isloadingMore={this.state.isloadingMore} loadingFn={this.LoadingMoreData.bind(this)}/> : ""}
            </div>
        )
    }
    componentDidMount(){
        this.getItemListData();  
    }
    getItemListData(){
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);
        this.getlistdata(result);
    }
    LoadingMoreData(){
        //获取跟多的数据
        this.setState({
             isloadingMore:true,  
         })
         const cityName = this.props.cityName;
         const page = this.state.page;
         const result = getListData(cityName,page);
         this.getlistdata(result);
         this.setState({
             isloadingMore:false,
             page:page+1
         })
         
    }
    getlistdata(result){
        result.then(res => {
            return res.json();
        }).then(json => {
            var hasMore = json.hasMore;
            var data = json.data;
            this.setState({
                data:this.state.data.concat(data),
                hasMore:hasMore
            })
        }).catch(ex =>{
            console.error("获取列表数据失败",ex.message);
        })
    }

} 

export default List;