/*
 parent是父组件，那如果是爷爷组件呢？
 provide, inject
* */

import  Vue from 'vue'

const compChild = {
  template:`
    <div>this is comChild，grandParent text is {{yeye.text}}</div>
  `,
  inject:['yeye'],
  /* 通过$parent可以得到父组件的各种信息 */
  /* 通过 inject可以获得爷爷级别组件的各种信息 */
  mounted() {
    console.log("parent name ----",this.$parent.$options.name)
    console.log("parent fruit ----",this.$parent.fruit)
    console.log("grandParent ----",this.yeye.$options.name)
    console.log("grandParent text ----",this.yeye.text)
  }
}

const comp = {
  name: 'comp',
  template:`
    <div :style="styles">
      <slot></slot>
      <comp-child></comp-child>
    </div>
  `,
  components:{
    compChild
  },
  data(){
    return {
      styles: {
        width: '400px',
        height: '150px',
        border: '1px solid red'
      },
      fruit: 'apple'
    }
  }
}

new Vue({
  el: '#root',
  name:'yeyeParent',
  components:{
    comp
  },
  provide(){
    return {
      yeye:this
    }
  },
  data(){
    return {
      text:'xixi'
    }
  },
  template: `
    <div>
       <comp>
          <span>{{text}}</span>
      </comp>
      <input type="text" v-model="text">
    </div>
  `
})
