// home-分类
import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"
import Item from "./item"
class ListItem extends React.Component{
    constructor(props,context){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        var {data} = this.props;
        return (
            <div id="listItem"> 
               <h2>猜你喜欢</h2>
               <div>
                   {
                      data.map((item,index) => {
                          return <Item key={index} data={item}/>
                      }) 
                   }
               </div>
            </div>
        )
    }
} 

export default ListItem;