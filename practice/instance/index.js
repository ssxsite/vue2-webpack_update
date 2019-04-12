import Vue from 'vue'
let div = document.createElement('div')
document.body.appendChild(div)
/* 挂载是吧原来的div覆盖掉，所以不能看到原来div的id */

/*vue实例的创建方法-----------------------------------------------------------------------------------------*/

/* vue实例的创建方法1----------- */
var app = new Vue({
  el: '#root',
  data(){
    return{
      obj:{}
    }
  },
  template: `<div>hello ssx!{{obj.a}}</div>`
})

/* vue实例的创建1-2----------- */

// new Vue({
//   template: '<div>hello ssx!</div>'
// }).$mount('#root')

 /*vue实例的创建方法2-----------*/
// const tempTemplate = {
//   template: '<div>hello ssx hahha!{{obj.a}}</div>',
// }

// var app = new Vue({
//   render: h => h(tempTemplate)
// }).$mount('#root')

let i = 0;
setInterval(()=>{
  i++
  // app.obj.a = 10
  app.$set(app.obj,'a',10)
},1000)
/*vue实例的属性-----------------------------------------------------------------------------------------*/

/* 1.数据data属性----------- */
// new Vue({
//   template: '<div>hello {{name}}!</div>',
//   data: {
//     name: 'lili'
//   }
// }).$mount('#root')

/* 数据data2 */
// var app = new Vue({
//   template: `<div>hello {{name}}!
// <span ref="span1">{{number}}</span>
// <span>{{obj.a}}</span>
// </div>`,
//   data: {
//     name: 'lili',
//     number: 0,
//     obj: {a: 0}
//   },
//   watch: {
//     number: function (newVal, oldVal) {
//       // console.log(`${newVal}, ${oldVal}`)
//     }
//   }
// }).$mount('#root')
// app.name = 'xiaoli'//修改数据方式2

// setInterval(() => {
//   // app.number++
//   app.$options.data.number++ // 无效
//   app.$data.number++ // 有效，修改数据方式3
// }, 1000)

/* 组件的其他属性----------- */
// console.log('data----', app.$data) // object
// console.log('props----', app.$props) // undefined
// console.log('el----', app.$el) // div
// console.log('options----', app.$options) // 只读，用于定义组件自定义属性

/* render 方法 */
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }// 有效果

/* 组件树根节点 */
// console.log(app.$root === app) // true

/* 组件的子组件 */
// console.log(app.$children) //Array[],因为目前没有子组件

/* 插槽 */
// console.log('$slots-----', app.$slots)
// console.log('$scopedSlots-----', app.$scopedSlots)

/* ref 快速定位到某个dom或者组件,如果这个ref是一个dom就返回dom,如果是vue组件，则返回这个组件实例，然后我们就可以操作这个组件实例了 */
// console.log("refs---",app.$refs)

/* isServer 项目里面有服务端渲染的时候才用到 */
// console.log("$isServer---", app.$isServer) // false

/* 组件的方法----------------------------------------------------------------------------------------- */
/* 1. watch number 值变化的时候就一直打印出来 */
// var unwatch = app.$watch('number',(newValue ,oldValue) => {
//   console.log(`${newValue}, ${oldValue}`)
// })

/* 2.watch返回值，用于手动销毁watch，否则会占用内存 */
// setTimeout(() => {
//   unwatch();
// }, 10000)

/* 3.在组件内定义的watch方法在组件销毁后会自动销毁 */
// setTimeout(() => {
//   app.$destroy();
// }, 10000)

/* 4.组件上触发事件 emit*/
/*先绑定事件回调函数*/
// app.$on('test', (val) => {
//   console.log("test 事件触发了！一直捕获",val)
// })

/*设定事件只触发一次*/
// app.$once('test', (val) => {
//   console.log("test 事件触发了,只捕获一次",val)
// })

/* emit触发事件 */
// app.$emit('test',1)  注意要捕获事件触发，必须先写on，否则执行不到

// setInterval(() => {
//   app.$emit('test',1)
// },1000)

/* 组件在创建的时候，没有声明的属性如何在后期再设置值, */
// let i = 0;
// setInterval( () => {
//   i++;
//   //app.obj.a = i; 方法1
//   // app.$set(app.obj,'a',i)  方法2
// },1000)

/* nextTick，让操作在dom更新渲染完以后再操作，也是非常常用 */












