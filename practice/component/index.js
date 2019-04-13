import Vue from 'vue'
import Props from './Props.vue'

const component = {
  template:`<div>This is a componet</div>`
}

const component2 = {
  template:`
    <div style="border: 1px solid red; margin-bottom: 10px;">
      <p>This is a other componet</p>
      <input type="text" v-model="text" v-show="active">
      <p @click="toParent">{{propOne}}</p>
      <div>
        <input type="text" v-model="obj.a">
        <input type="text" v-model="obj.b">
      </div>
    
    </div>
`,
  /* 当时此处的data必须是function */
  data:function () {
    return {
      text: ''
    }
  },
  /* props简写形式*/
  // props:['active','propOne'],
  props: {
    active:{
      type:Boolean,
      // required: true,  //必传，不传就会警告
      default: true     //default 有值，就不需要写required,不传也会给传默认值
    },
    propOne: String,
    /* 如果 props是对象的话，改变对象也会影响到父组件*/
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
    // this.propOne = 'ssx'  /* 直接修改props会警告，违背了props单向数据流的原则，不能直接修改props */
  },
  methods:{
    toParent(){
      this.$emit('change')
    }
  }
}

/* 风格指南 https://cn.vuejs.org/v2/style-guide/ */
/* 组件命名以首字母大写的驼峰*/

/* 注册组件的方式一,这种就是全局定义，定义后哪里都可以使用组件的实例 */
  Vue.component('CompOne',component)

/* 使用的时候用小写- */
new Vue({
  el:'#root',
  template: `
    <div>
      <comp-one></comp-one>
      <comp-two ref="testComp"   :prop-one="prop1" @change="handleChange" :obj="pObj"></comp-two>
      <comp-two  :prop-one="prop1" @change="handleChange" :obj="pObj"></comp-two>
      <p>{{prop1}}</p>
      <Props
          name="Hello Vue！"
          :type="type"
          :is-visible="false"
          :on-change="handlePropChange"
          title="属性Demo"
          :class="['test2']"
          class="test1"
          :style="{ marginTop: '20px' }"
          style="margin-top: 10px"
          :propE="propE"
        />
    </div>
`,
  /* 注册组件的方式二 ，用components在需要的文件里面注册组件，就可以使用组件的实例了*/
  components:{
    CompTwo: component2,
    Props
  },
  data() {
    return {
      prop1: 'test1111111',
      pObj:{
        a:'hello',
        b:'world'
      },
      type: "success",
      propE:{name:'ssx'}
    }
  },
  methods: {
    handleChange: function () {
      this.prop1 = this.prop1+'222'
    },
    handlePropChange(val) {
      this.type = val;
    },
  },
  mounted(){
    console.log("this.$refs.testComp",this.$refs.testComp);
  }

})
