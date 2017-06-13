import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        var data = this.props.data;
        return (
            <div id="ad-list">
                <h2>超值特惠</h2>
                <div className="clear-fix">
                {data.map((item,index) => {
                    return (<div key={index} className="ad">
                              <a href={item.link}>
                               <img src={item.img} />
                              </a>
                            </div>)
                       })}
                 </div>      
            </div>
        )
    }
}

export default HomeAd;