import * as express from 'express'
import {Server} from 'ws';

export interface Menu {
    /** 文本 */
    text: string;
    /** i18n主键 */
    i18n?: string;
    /** 是否菜单组 */
    group?: boolean;
    /** angular 路由 */
    link?: string;
    /** 外部链接 */
    externalLink?: string;
    /** 链接 target */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /** 图标 */
    icon?: string;
    /** 徽标数，展示的数字。（注：`group:true` 无效） */
    badge?: number;
    /** 徽标数，显示小红点 */
    badge_dot?: boolean;
    /** 徽标数，设置 Badge 颜色 （默认：error， 所有颜色值见：https://github.com/cipchk/ng-alain/blob/master/_documents/utils.md#色彩） */
    badge_status?: string;
    /** 是否隐藏 */
    hide?: boolean;
    /** ACL配置，若导入 `@delon/acl` 时自动有效 */
    acl?: any;
    /** 是否快捷菜单项 */
    shortcut?: boolean;
    /** 快捷菜单根节点 */
    shortcut_root?: boolean;
    /** 是否允许复用，需配合 `reuse-tab` 组件 */
    reuse?: boolean;
    /** 二级菜单 */
    children?: Menu[];
    /**
     * 菜单类型，无须指定由 Service 自动识别
     * 1：链接
     * 2：外部链接
     * 3：链接（子菜单）
     * @private
     */
    _type?: number;
    /**
     * 是否选中
     * @private
     */
    _selected?: boolean;
    /**
     * 是否隐藏菜单
     * @private
     */
    _hidden?: boolean;
    /**
     * 是否打开
     * @private
     */
    _open?: boolean;
    /**
     * @private
     */
    _depth?: number;

    [key: string]: any;
}
const  app = express();

export class User{
    constructor(
        public id:number,
        public account:string,
        public password:string,
        public roles: string[],
        ){
    }
}


const users:User[] = [
    new User(1,"sysAdmin",'8888888',['sysAdmin','admin','customer']),
    new User(2,'admin','8888888',['admin','customer']),
    new User(3,'ssx','123456',['customer'])
];

const goodsCa =  [
    {
        "id":10,
        "parentId":2,
        "name":"鱼类",
        "memo":"",
        "sortIndex":1,
        "code":"HX01",
        "state":1,
        "updateTime":null,
        "creTime":"2016-06-24 09:53:22",
        "url":"http://qiniu.dpzaixian.com/goods_category/o_1am01oejo1ced1rda4j4102q3h99.png",
        "level":2,
        "pathIds":",2,10,",
        "mergerName":"冻品海鲜>鱼类",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    },
    {
        "id":11,
        "parentId":2,
        "name":"虾蟹类",
        "memo":"",
        "sortIndex":2,
        "code":"HX02",
        "state":1,
        "updateTime":null,
        "creTime":"2016-06-24 09:56:14",
        "url":"http://qiniu.dpzaixian.com/goods_category/o_1am01ucg4ql01iv1113g1l57am9.png",
        "level":2,
        "pathIds":",2,11,",
        "mergerName":"冻品海鲜>虾蟹类",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    },
    {
        "id":12,
        "parentId":2,
        "name":"贝类",
        "memo":"",
        "sortIndex":3,
        "code":"HX03",
        "state":1,
        "updateTime":"2016-06-24 14:00:30",
        "creTime":"2016-06-24 09:57:29",
        "url":"http://qiniu.dpzaixian.com/goods_category/o_1am01uo281tuk8dotm1u7d9di9.png",
        "level":2,
        "pathIds":",2,12,",
        "mergerName":"冻品海鲜>贝类",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    },
    {
        "id":13,
        "parentId":2,
        "name":"半成品",
        "memo":"",
        "sortIndex":4,
        "code":"HX04",
        "state":1,
        "updateTime":null,
        "creTime":"2016-06-24 09:57:52",
        "url":"http://qiniu.dpzaixian.com/goods_category/o_1am0218qc14h0198a57d1u9t4j59.png",
        "level":2,
        "pathIds":",2,13,",
        "mergerName":"冻品海鲜>半成品",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    },
    {
        "id":26,
        "parentId":2,
        "name":"鱿鱼类",
        "memo":null,
        "sortIndex":5,
        "code":"HX05",
        "state":1,
        "updateTime":"2017-03-15 15:17:48",
        "creTime":"2017-03-15 15:17:57",
        "url":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "level":2,
        "pathIds":",2,26,",
        "mergerName":"冻品海鲜>鱿鱼类",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    },
    {
        "id":27,
        "parentId":2,
        "name":"其它",
        "memo":null,
        "sortIndex":6,
        "code":"HX06",
        "state":1,
        "updateTime":"2017-03-15 15:18:32",
        "creTime":"2017-03-15 15:18:52",
        "url":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "level":2,
        "pathIds":",2,27,",
        "mergerName":"冻品海鲜>其它",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    },
    {
        "id":124,
        "parentId":2,
        "name":"定制产品",
        "memo":null,
        "sortIndex":7,
        "code":"HX07",
        "state":1,
        "updateTime":"2017-10-13 17:12:50",
        "creTime":"2017-10-13 17:13:00",
        "url":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "level":2,
        "pathIds":",2,124,",
        "mergerName":"冻品海鲜>定制产品",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/hx.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/shuichang.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/shuichang.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    },
    {
        "id":17,
        "parentId":3,
        "name":"火锅料理",
        "memo":"",
        "sortIndex":1,
        "code":"TL01",
        "state":1,
        "updateTime":null,
        "creTime":"2016-06-24 10:02:34",
        "url":"http://qiniu.dpzaixian.com/goods_category/o_1am029jcc11on1l31cq6pk119fm9.png",
        "level":2,
        "pathIds":",3,17,",
        "mergerName":"调理美食>火锅料理",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/tl.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/common.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/common.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    },
    {
        "id":15,
        "parentId":3,
        "name":"烧烤美食",
        "memo":"",
        "sortIndex":2,
        "code":"TL02",
        "state":1,
        "updateTime":null,
        "creTime":"2016-06-24 09:59:48",
        "url":"http://qiniu.dpzaixian.com/goods_category/o_1am024tpj6rn10e113jrh7q9ku9.png",
        "level":2,
        "pathIds":",3,15,",
        "mergerName":"调理美食>烧烤美食",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/tl.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/common.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/common.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    },
    {
        "id":16,
        "parentId":3,
        "name":"调理主菜",
        "memo":"",
        "sortIndex":3,
        "code":"TL03",
        "state":1,
        "updateTime":null,
        "creTime":"2016-06-24 10:02:12",
        "url":"http://qiniu.dpzaixian.com/goods_category/o_1am028oc019m51pdvpj01gn21qtj9.png",
        "level":2,
        "pathIds":",3,16,",
        "mergerName":"调理美食>调理主菜",
        "activityCategory":null,
        "phoneUrl":"http://qiniu.dpzaixian.com/goods_category/tl.png",
        "orderMeetingFloorPic":"http://qiniu.dpzaixian.com/order_meeting_floor/common.png",
        "spotActivityAreaPic":"http://qiniu.dpzaixian.com/spot_activity_area/common.png",
        "parent":null,
        "activities":null,
        "goodsCategoryOneId":null,
        "goodsShows":null,
        "goodsList":null,
        "children":[

        ]
    }
    ]

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
app.get('/',(req,res)=>{
    res.send("hello Express!");
});

app.get('/api/users',(req,res)=>{
    var
    userName = req.query.userName,
    userPwd = req.query.userPwd,
    userName2 = req.param('userName'),
    userPwd2 = req.param('userPwd');//注意req.query,req.param

    console.log('req.query用户名:'+userName);
    console.log('req.query密码:'+userPwd);
    console.log('req.param用户名:'+userName2);
    console.log('req.param密码:'+userPwd2);
    res.json(users);
});
app.get('/api/user/:id',(req,res)=>{
    res.json(users.find( (user) => user.id == req.params.id));
});

app.get('/api/goods/goods/category',(req,res)=>{
    res.json(goodsCa);
});


const  server = app.listen(8001,"localhost",()=>{
    console.log("服务器已启动,地址是：http://localhost:8001");
});

const wsServer = new Server({port:8085});
wsServer.on("connection",websocket => {
    websocket.send("服务器主动推送的数据，请接收!");
    websocket.on("message",message => {
        console.log("客户端发过来的消息是："+ message);
    })
});



