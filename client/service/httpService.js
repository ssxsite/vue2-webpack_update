import $ from 'jquery'
var baseUrl = "http://zy.app.dongpin.vip:81/"

/*使用Jquery AJAX封装的这种请求，每次只发起一次请求，而用一些封装好的插件，比如VUX的 AjaxPlugin，都会发起两次请求，比较浪费资源*/
/* flag == 1，data参数是用Payload提交方式；否则用Form提交方式，也就是formData*/
/* 参考链接：https://blog.csdn.net/yiifaa/article/details/73468001*/
export const Ajax = {
  showTip(txt) {
    document.getElementById("showTipBox").innerHTML = `<div style='
        position: fixed;
        top: 50%;
        margin-top: -20px;
        left: 20%;
        width: 60%;
        text-align: center;
        background: rgba(0,0,0,.6);
        color: #FFFFFF;
        padding: 10px;
        border-radius:5px;
        z-index:999;
      ' >${txt}</div>`;
    setTimeout(function () {
      document.getElementById("showTipBox").innerHTML = "";
    }, 3000)
  },
  post(url = '', data = {},flag=1){
    let that = this
    url = baseUrl + url
    let contentType = flag=== 1? 'application/json;charset=utf-8': 'application/x-www-form-urlencoded; charset=UTF-8'
    return new Promise((resolve, reject) => {
      $.ajax(url,{
        contentType:contentType,
        charset:'UTF-8',
        data:flag=== 1?JSON.stringify(data):data,
        dataType:'json',//服务器返回json格式数据
        type:'post',//HTTP请求类型
        timeout:10000,//超时时间设置为10秒；
        success:function(res){
          if (res.code == 200) {
            resolve && resolve(res);
          } else {
            that.showTip(res.message)
            reject && reject(res);
          }
        },
        error:function(xhr,type,errorThrown){
          console.log("网络错误-----------",xhr)
          let str=xhr.status+""+xhr.statusText
          that.showTip(str)
        }
      });
    })
  },
  get(url = ''){
    url = baseUrl + url
    let that = this
    return new Promise((resolve, reject) => {
      $.ajax(url,{
        dataType:'json',//服务器返回json格式数据
        type:'get',//HTTP请求类型
        timeout:10000,//超时时间设置为10秒；
        success:function(res){
          if (res.code == 200) {
            resolve && resolve(res);
          } else {
            that.showTip(res.message)
            reject && reject(res);
          }
        },
        error:function(xhr,type,errorThrown){
          console.log("网络错误-----------",xhr)
          let str=xhr.status+""+xhr.statusText
          that.showTip(str)
        }
      });
    })
  }
}


