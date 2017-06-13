var app = require('koa')();
var router = require('koa-router')();

// 超值特惠接口数据
router.get('/api/homead', function *(next) {
    this.body = require("./home/ad.js");
});
// 猜你喜欢接口数据
router.get('/api/homelist/:city/:page', function *(next) {
    var params=this.params;
    console.log(params.city);
    this.body = require("./home/list.js")
});
//城市列表接口
router.get("/api/cityitem",function *(next){
    this.body = require("./home/citylist.js")
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
