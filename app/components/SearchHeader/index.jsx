import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"
class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            value:""
        }
    }
    render() {
        return (
            <div id="SearchHeader">
                <i className="icon-chevron-left" onClick={this.backHandle.bind(this)}></i>
                <input type="text" placeholder="请输入关键字..." value={this.state.value} />
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            value:this.props.keyword || ""
        })
    }
    backHandle(){
        window.history.back();
    }
}


export default SearchHeader;