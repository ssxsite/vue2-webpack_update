/* 组件的 parent 查看*/

import  Vue from 'vue'

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
    console.log('parent----------',this.$parent.text) //查看父组件的parent的名字
    //修改父组件的parent的属性值，但是不推荐这么做
    this.$parent.text = '3333333'
  },
  methods:{
    toParent(){
      console.log("outer-------")
    }
  }
}


new Vue({
  name: 'Root', //组件的parent
  el:"#root",
  components:{
    Comp: component1
  },
  data(){
    return {
      text: '222'
    }
  },
  template: `
    <div>
        <p>{{text}}</p>
        <comp :propOne="'111'"></comp>
    </div>
  `
})
