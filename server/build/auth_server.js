"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
var User = /** @class */ (function () {
    function User(id, account, password, roles) {
        this.id = id;
        this.account = account;
        this.password = password;
        this.roles = roles;
    }
    return User;
}());
exports.User = User;
var users = [
    new User(1, "sysAdmin", '8888888', ['sysAdmin', 'admin', 'customer']),
    new User(2, 'admin', '8888888', ['admin', 'customer']),
    new User(3, 'ssx', '123456', ['customer'])
];
var goodsCa = [
    {
        "id": 10,
        "parentId": 2,
        "name": "鱼类",
        "memo": "",
        "sortIndex": 1,
        "code": "HX01",
        "state": 1,
        "updateTime": null,
        "creTime": "2016-06-24 09:53:22",
        "url": "http://qiniu.dpzaixian.com/goods_category/o_1am01oejo1ced1rda4j4102q3h99.png",
        "level": 2,
        "pathIds": ",2,10,",
        "mergerName": "冻品海鲜>鱼类",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    },
    {
        "id": 11,
        "parentId": 2,
        "name": "虾蟹类",
        "memo": "",
        "sortIndex": 2,
        "code": "HX02",
        "state": 1,
        "updateTime": null,
        "creTime": "2016-06-24 09:56:14",
        "url": "http://qiniu.dpzaixian.com/goods_category/o_1am01ucg4ql01iv1113g1l57am9.png",
        "level": 2,
        "pathIds": ",2,11,",
        "mergerName": "冻品海鲜>虾蟹类",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    },
    {
        "id": 12,
        "parentId": 2,
        "name": "贝类",
        "memo": "",
        "sortIndex": 3,
        "code": "HX03",
        "state": 1,
        "updateTime": "2016-06-24 14:00:30",
        "creTime": "2016-06-24 09:57:29",
        "url": "http://qiniu.dpzaixian.com/goods_category/o_1am01uo281tuk8dotm1u7d9di9.png",
        "level": 2,
        "pathIds": ",2,12,",
        "mergerName": "冻品海鲜>贝类",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    },
    {
        "id": 13,
        "parentId": 2,
        "name": "半成品",
        "memo": "",
        "sortIndex": 4,
        "code": "HX04",
        "state": 1,
        "updateTime": null,
        "creTime": "2016-06-24 09:57:52",
        "url": "http://qiniu.dpzaixian.com/goods_category/o_1am0218qc14h0198a57d1u9t4j59.png",
        "level": 2,
        "pathIds": ",2,13,",
        "mergerName": "冻品海鲜>半成品",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    },
    {
        "id": 26,
        "parentId": 2,
        "name": "鱿鱼类",
        "memo": null,
        "sortIndex": 5,
        "code": "HX05",
        "state": 1,
        "updateTime": "2017-03-15 15:17:48",
        "creTime": "2017-03-15 15:17:57",
        "url": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "level": 2,
        "pathIds": ",2,26,",
        "mergerName": "冻品海鲜>鱿鱼类",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    },
    {
        "id": 27,
        "parentId": 2,
        "name": "其它",
        "memo": null,
        "sortIndex": 6,
        "code": "HX06",
        "state": 1,
        "updateTime": "2017-03-15 15:18:32",
        "creTime": "2017-03-15 15:18:52",
        "url": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "level": 2,
        "pathIds": ",2,27,",
        "mergerName": "冻品海鲜>其它",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    },
    {
        "id": 124,
        "parentId": 2,
        "name": "定制产品",
        "memo": null,
        "sortIndex": 7,
        "code": "HX07",
        "state": 1,
        "updateTime": "2017-10-13 17:12:50",
        "creTime": "2017-10-13 17:13:00",
        "url": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "level": 2,
        "pathIds": ",2,124,",
        "mergerName": "冻品海鲜>定制产品",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    },
    {
        "id": 17,
        "parentId": 3,
        "name": "火锅料理",
        "memo": "",
        "sortIndex": 1,
        "code": "TL01",
        "state": 1,
        "updateTime": null,
        "creTime": "2016-06-24 10:02:34",
        "url": "http://qiniu.dpzaixian.com/goods_category/o_1am029jcc11on1l31cq6pk119fm9.png",
        "level": 2,
        "pathIds": ",3,17,",
        "mergerName": "调理美食>火锅料理",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/tl.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/common.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/common.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    },
    {
        "id": 15,
        "parentId": 3,
        "name": "烧烤美食",
        "memo": "",
        "sortIndex": 2,
        "code": "TL02",
        "state": 1,
        "updateTime": null,
        "creTime": "2016-06-24 09:59:48",
        "url": "http://qiniu.dpzaixian.com/goods_category/o_1am024tpj6rn10e113jrh7q9ku9.png",
        "level": 2,
        "pathIds": ",3,15,",
        "mergerName": "调理美食>烧烤美食",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/tl.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/common.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/common.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    },
    {
        "id": 16,
        "parentId": 3,
        "name": "调理主菜",
        "memo": "",
        "sortIndex": 3,
        "code": "TL03",
        "state": 1,
        "updateTime": null,
        "creTime": "2016-06-24 10:02:12",
        "url": "http://qiniu.dpzaixian.com/goods_category/o_1am028oc019m51pdvpj01gn21qtj9.png",
        "level": 2,
        "pathIds": ",3,16,",
        "mergerName": "调理美食>调理主菜",
        "activityCategory": null,
        "phoneUrl": "http://qiniu.dpzaixian.com/goods_category/tl.png",
        "orderMeetingFloorPic": "http://qiniu.dpzaixian.com/order_meeting_floor/common.png",
        "spotActivityAreaPic": "http://qiniu.dpzaixian.com/spot_activity_area/common.png",
        "parent": null,
        "activities": null,
        "goodsCategoryOneId": null,
        "goodsShows": null,
        "goodsList": null,
        "children": []
    }
];
// app.use("*", function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     if (req.method === 'OPTIONS') {
//         res.send(200)
//     } else {
//         next()
//     }
// });
app.get('/', function (req, res) {
    res.send("hello Express!");
});
app.get('/api/users', function (req, res) {
    var userName = req.query.userName, userPwd = req.query.userPwd, userName2 = req.param('userName'), userPwd2 = req.param('userPwd'); //注意req.query,req.param
    console.log('req.query用户名:' + userName);
    console.log('req.query密码:' + userPwd);
    console.log('req.param用户名:' + userName2);
    console.log('req.param密码:' + userPwd2);
    res.json(users);
});
app.get('/api/user/:id', function (req, res) {
    res.json(users.find(function (user) { return user.id == req.params.id; }));
});
app.get('/api/goods/goods/category', function (req, res) {
    res.json(goodsCa);
});
var server = app.listen(8001, "localhost", function () {
    console.log("服务器已启动,地址是：http://localhost:8001");
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    websocket.send("服务器主动推送的数据，请接收!");
    websocket.on("message", function (message) {
        console.log("客户端发过来的消息是：" + message);
    });
});
