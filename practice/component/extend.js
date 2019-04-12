/* 上一次子组件里面有props，data,templete，但它是作为子组件给父组件使用，是用components注册，那如果这个子组件没有父组件调用，
* 而是要单独挂载到某个Dom上，该如何使用？
* Vue.extend可以帮我们处理
* */

import Vue from 'vue'

const component2 = {
  template:`
    <div style="border: 1px solid #ccc; margin-bottom: 10px;">
      <p>This is a other componet1111</p>
      <input type="text" v-model="text" v-show="active">
      <p @click="toParent">{{propOne}}</p>
      <div>
        <input type="text" v-model="obj.a">
        <input type="text" v-model="obj.b">
      </div>
    
    </div>
`,
  data:function () {
    return {
      text: ''
    }
  },
  props: {
    active:{
      type:Boolean,
      default: true
    },
    propOne: {
      type:String,
      required: true
    },
    obj:{
      type:Object,
      default(){
        return {
          a:'',
          b:''
        }
      }
    }
  },
  mounted(){
    console.log("component2 mounted!")
  },
  methods:{
    toParent(){
      console.log("outer-------")
    }
  }
}

/* 方式一 ，直接用vue class帮我们生成实例 */
// new Vue(component2).$mount('#root')


/* 方式二 用extend 拓展vue class，这样我们也可以利用这个模板生成vue实例 */

const CompVue = Vue.extend(component2)

new CompVue({
  el: '#root',
  /* 必填是props 通过 propsData 传递*/
  propsData:{
    propOne:'test22'
  },
  /* data 也可以重新赋值*/
  data:function () {
    return {
      text: 'ssx'
    }
  },
  /* 生命周期函数也可以重新设置，并且都有效*/
  mounted(){
    console.log("component2 instance mounted!")
  },
  /* 函数可以重写 */
  methods:{
    toParent(){
      console.log("inter-------")
    }
  }

})



/* extends 属性去拓展已有组件的options,然后修改一些新的options，生成新的组件*/
const componet2 = {
  extends: compoent,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    /* this.$parent 用于获取组件挂载的vue实例Dom*/
    console.log(this.$parent.$options.name)
  }
}






