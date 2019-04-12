import Vue from 'vue'
import {AjaxPlugin} from 'vux';

Vue.use(AjaxPlugin);
import qs from 'qs';

AjaxPlugin.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// POST传参序列化(添加请求拦截器)
AjaxPlugin.$http.interceptors.request.use((config) => {
  // 发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return error
})

let base = "";
export const Ajax = {
  showTip(txt) {
    document.getElementById("showTipBox").innerHTML = `<div style='
        position: absolute;
        top: 50%;
        margin-top: -20px;
        left: 20%;
        width: 60%;
        text-align: center;
        background: rgba(0,0,0,.6);
        color: #FFFFFF;
        padding: 10px;
        border-radius:5px;
      ' >${txt}</div>`;
    setTimeout(function () {
      document.getElementById("showTipBox").innerHTML = "";
    }, 3000)
  },
  get(url, callback) {
    Vue.http.get(`${base}${url}`).then((res) => {
      if (res.data.code == 200) {
        callback && callback(res);
      } else {
        this.showTip(res.data.message)
      }

    })
  },

  //
  post(url, options, callback, errCb = ()=>{}) {
    Vue.http.post(`${base}${url}`, options).then((res) => {
      if (res.data.code == 200) {
        callback && callback(res);
      } else {
        errCb && errCb(res);
        this.showTip(res.data.message)
      }

    })
  }
}
