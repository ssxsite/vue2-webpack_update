import Vue from 'vue'

/* 组件从创建到渲染，一定会执行beforeCreate,created,beforeMount,mounted，并且只执行一次 */
/* 如果是服务端渲染就没有beforeMount，mounted函数了 */

var vm = new Vue({
  // el: '#root',
  template: '<div>vue lifecycle<span> name is {{name}}</span></div>',
  data: {
    name:''
  },
  beforeCreate: function () {
    console.log("beforeCreate")
  },
  created: function () {
    console.log("create")
    /*组件渲染完成后，数据有改定，就执行beforeUpdate，updated */
    setTimeout(() => {
      vm.$set(vm.$data,'name','xiaoli')
    },10000)
  },
  beforeMount: function () {
    console.log("beforeMount")
  },
  mounted: function () {
    console.log("mounted")

  },
  beforeUpdate: function () {
    console.log("beforeUpdate")
  },
  updated: function () {
    console.log("update")
  },
  beforeDestroy: function () {
    console.log("beforeDestroy")
  },
  destroyed: function () {
    console.log("destroyed")
  },
  activated: function () { //keep-alive 组件激活时调用。

  },
  deactivated: function () { //keep-alive 组件停用时调用。

  },
  /* 重置渲染函数 */
  render (h) {
    throw new Error('渲染报错了------')
    console.log("render-------")
    return h('div', {}, 'hello')
  },
  /* 捕获渲染函数里面的错误，只捕获本组件的，其他组件不管 */
  renderError (h, err) {
    console.log("renderError-------")
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 会向上冒泡，并且正式环境可以使用，如果在app.vue里面写的话，那么所有子组件只要有一个子组件渲染出错，这个函数都可以捕获到
  }

}).$mount('#root')

/* 组件销毁的时候调用 beforeDestroy destroyed */
// setTimeout(() => {
//   vm.$destroy()
// },20000)





