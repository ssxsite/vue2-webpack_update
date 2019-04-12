/*
* 假设一个组件模板和另外一个组件模板基本一致，就是个别属性特性不一样，该如何处理？
* */

import Vue from 'vue'

const component1 = {
  template:`
    <div style="border: 1px solid #ccc; margin-bottom: 10px;">
      <p>This is a other componet</p>
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

const component2 = {
  /* extends 的第二种用法 */
  extends: component1,
  /*重新设置初始值*/
  data:function () {
    return {
      text: '22222'
    }
  },
  props: {
    propOne: {
      type:Number
    },
  }
}

 const  CompVue = Vue.extend(component2)

new Vue({
  template:`<div>
    <p>1111111</p>
    <comp-Vue></comp-Vue>
</div>`,
  components:{
    CompVue
  }
}).$mount("#root")


