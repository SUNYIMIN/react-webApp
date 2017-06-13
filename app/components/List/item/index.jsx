import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        var {data} = this.props;
        return (
           <div className="item-list clear-fix">
            <div className="item-left">
              <img src={data.img} />
            </div>
            <div className="item-right">
               <div className="item-title clear-fix">
                  <h3>{data.title}</h3>
                  <span>{data.distance}</span>
               </div>
               <p>
                 {data.subTitle}
               </p>
               <div className="item-price clear-fix">
                  <h3>¥{data.price}</h3>
                  <span>已售{data.mumber}</span>
               </div>
            </div>
           </div>
        )
    }
}


export default Item;