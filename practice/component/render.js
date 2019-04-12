/* vue render函数就是把templete转换成虚拟DOM,关键就是createElement函数
* */

import Vue from 'vue'

/* 当组件没有定义template，但是通过render直接定义也是一样的*/
const comp = {
  template:`
    <div :style="styles">
       <slot></slot>
       <p>{{name}}</p>
    </div>
  `,
  props:['prop1'],
  data() {
    return {
      styles:{
        width: '200px',
        height:'150px',
        border: '1px solid red'
      },
      name:'ssx'
    }
  },
  /* templete 实际上是编译成render函数*/
  // render(createElement) {
  //   return createElement('div',{
  //     style:this.styles
  //   },[this.$slots.default,
  //     createElement('p',[this.prop1])
  //   ])
  // }
}

var Com = Vue.extend(comp)

new Com({
  el:'#root'
})

// new Vue({
//   el:'#root',
//   template:`
//     <div class='111'>
//       <comp :prop1="value">
//         <span>{{text}}</span>
//       </comp>
//       <input type="text" autofocus="autofocus">
//     </div>
//   `,
//   components:{
//     comp
//   },
//   data(){
//     return{
//       text:'hello world',
//       value: '333'
//     }
//   },
//   render(createElement){
//     return createElement('div',{class:'111'},[
//       createElement('comp',{props:{prop1:this.value}},[
//         createElement('span',[this.text])
//       ])
//     ])
//   }
// })
