"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
var User = /** @class */ (function () {
    function User(id, account, password, roles, menuList) {
        this.id = id;
        this.account = account;
        this.password = password;
        this.roles = roles;
        this.menuList = menuList;
    }
    return User;
}());
exports.User = User;
var users = [
    new User(1, "sysAdmin", '8888888', ['CUSTOMER'], [
        {
            text: "系统", link: "", icon: "anticon anticon-gift", children: [
                {
                    text: "角色管理", link: "", icon: "anticon anticon-gift"
                },
                {
                    text: "权限管理", link: "", icon: "anticon anticon-gift"
                }
            ]
        },
        {
            text: "商品", link: "", icon: "anticon anticon-gift", children: [
                {
                    text: "商品管理1", link: "", icon: "anticon anticon-gift"
                },
                {
                    text: "商品管理2", link: "", icon: "anticon anticon-gift"
                }
            ]
        }
    ]),
    new User(2, 'admin', '8888888', ['CUSTOMER'], [{
            text: "系统", link: "", icon: "anticon anticon-gift", children: [
                {
                    text: "角色管理", link: "", icon: "anticon anticon-gift"
                },
                {
                    text: "权限管理", link: "", icon: "anticon anticon-gift"
                }
            ]
        },]),
    new User(3, 'ssx', '123456', ['CUSTOMER'], [{
            text: "商品", link: "", icon: "anticon anticon-gift", children: [
                {
                    text: "商品管理1", link: "", icon: "anticon anticon-gift"
                },
                {
                    text: "商品管理2", link: "", icon: "anticon anticon-gift"
                }
            ]
        }])
];
app.get('/', function (req, res) {
    res.send("hello Express!");
});
app.get('/api/users', function (req, res) {
    res.json(users);
});
app.get('/api/user/:id', function (req, res) {
    res.json(users.find(function (user) { return user.id == req.params.id; }));
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
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send("这是服务器定时发送");
        });
    }
}, 2000);
