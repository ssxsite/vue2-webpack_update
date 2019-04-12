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
        public menuList: Menu[]){
    }
}

const users:User[] = [
    new User(1,"sysAdmin",'8888888',['CUSTOMER'],[
        {
        text:"系统",link:"",icon:"anticon anticon-gift",children:[
            {
                text:"角色管理",link:"",icon:"anticon anticon-gift"
            },
            {
                text:"权限管理",link:"",icon:"anticon anticon-gift"
            }
            ]
        },
        {
            text:"商品",link:"",icon:"anticon anticon-gift",children:[
            {
                text:"商品管理1",link:"",icon:"anticon anticon-gift"
            },
            {
                text:"商品管理2",link:"",icon:"anticon anticon-gift"
            }
            ]
        }
    ]),
    new User(2,'admin','8888888',['CUSTOMER'],[{
        text:"系统",link:"",icon:"anticon anticon-gift",children:[
            {
                text:"角色管理",link:"",icon:"anticon anticon-gift"
            },
            {
                text:"权限管理",link:"",icon:"anticon anticon-gift"
            }
        ]
    },]),
    new User(3,'ssx','123456',['CUSTOMER'],[{
        text:"商品",link:"",icon:"anticon anticon-gift",children:[
            {
                text:"商品管理1",link:"",icon:"anticon anticon-gift"
            },
            {
                text:"商品管理2",link:"",icon:"anticon anticon-gift"
            }
        ]
    }])
];

app.get('/',(req,res)=>{
    res.send("hello Express!");
});

app.get('/api/users',(req,res)=>{
    res.json(users);
});
app.get('/api/user/:id',(req,res)=>{
    res.json(users.find( (user) => user.id == req.params.id));
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

setInterval(() =>{
    if(wsServer.clients){
        wsServer.clients.forEach(client => {
            client.send("这是服务器定时发送");
        })
    }
},2000);


