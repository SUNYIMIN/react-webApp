import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import {Link} from "react-router"
import './style.less';

class Carousel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index:0
        }
    }
    render() {
        var opt = {
            auto:3000,
            callback:(index) => {
               this.setState({
                   index:index
               })
            }
        }
        return (
           <div id="carousel">
             <ReactSwipe className="carousel" swipeOptions={opt}>
                <div>
                   <ul className="carouselFist">
                     <Link to="/search/jingdian"><li className="jingdian">景点</li></Link>
                     <Link to="/search/ktv"><li className="ktv">KTV</li></Link>
                     <Link to="/search/gouwu"><li className="gouwu">购物</li></Link>
                     <Link to="/search/shenghuo"><li className="shenghuo">生活服务</li></Link>
                     <Link to="/search/jianshen"><li className="jianshen">健身运动</li></Link>
                     <Link to="/search/meifa"><li className="meifa">美发</li></Link>
                     <Link to="/search/qingzi"><li className="qingzi">亲子</li></Link>
                     <Link to="/search/xiaochi"><li className="xiaochi">小吃快餐</li></Link>
                     <Link to="/search/zizhu"><li className="zizhu">自助餐</li></Link>
                     <Link to="/search/jiuba"><li className="jiuba">酒吧</li></Link>
                   </ul>
                </div>
                <div>
                   <ul className="carouselSecond">
                     <Link to="/search/meishi"><li className="meishi">美食</li></Link>
                     <Link to="/search/dianying"><li className="dianying">电影</li></Link>
                     <Link to="/search/jiudian"><li className="jiudian">酒店</li></Link>
                     <Link to="/search/xiuxian"><li className="xiuxian">休闲娱乐</li></Link>
                     <Link to="/search/waimai"><li className="waimai">外卖</li></Link>
                     <Link to="/search/huoguo"><li className="huoguo">火锅</li></Link>
                     <Link to="/search/liren"><li className="liren">丽人</li></Link>
                     <Link to="/search/dujia"><li className="dujia">度假出行</li></Link>
                     <Link to="/search/zuliao"><li className="zuliao">足疗按摩</li></Link>
                     <Link to="/search/zhoubian"><li className="zhoubian">周边游</li></Link>
                   </ul>
                </div>
                <div>
                   <ul className="carouselThree">
                     <Link to="/search/reben"><li className="reben">日本菜</li></Link>
                     <Link to="/search/spa"><li className="spa">SPA</li></Link>
                     <Link to="/search/jiehun"><li className="jiehun">结婚</li></Link>
                     <Link to="/search/xuexi"><li className="xuexi">学习培训</li></Link>
                     <Link to="/search/xican"><li className="xican">西餐</li></Link>
                     <Link to="/search/huoche"><li className="huoche">火车机票</li></Link>
                     <Link to="/search/shaokao"><li className="shaokao">烧烤</li></Link>
                     <Link to="/search/jiazhuang"><li className="jiazhuang">家装</li></Link>
                     <Link to="/search/chongwu"><li className="chongwu">宠物</li></Link>
                     <Link to="/search/quanbu"><li className="quanbu">全部分类</li></Link>
                   </ul>
                </div>
             </ReactSwipe>
             <div className="carouselIcon">
                <ul className="icon-list">
                  <li className={this.state.index===0?"select":""}></li>
                  <li className={this.state.index===1?"select":""}></li>
                  <li className={this.state.index===2?"select":""}></li>
                </ul>
             </div>
           </div>
        )
    }
}

export default Carousel;