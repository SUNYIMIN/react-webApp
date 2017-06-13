import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"
class LoadingMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="loadingmore">
               {this.props.isloadingMore ? 
                   <span>加载中...</span> : 
                   <span onClick={this.loadingMore.bind(this)}>加载更多...</span>}
            </div>
        )
    }
    loadingMore(){
        this.props.loadingFn();
    }
}

export default LoadingMore;