/* 问题1：子组件为什么不能修改父组件传递的属性值？如果修改了，就一定会报错吗？父组件是如何监听到子组件的数据修改？*/
/* 答案：子组件修改父组件传递的数据不符合单向数据流的方式，子组件默认情况下，是不允许修改父组件的数据的，因为通常父组件传递给子组件数据，
自己也可能用到这些数据，如果子组件会修改父组件的数据，会造成父组件的数据的混乱。

但是子组件修改父组件的数据，并不总是能监听到：数据是指类型的可以检测到，数据是指针类型的，新增属性，删除属性不能检测到。
如果要检测到，就强制在子组件把这些属性defineProperty
* */
import Vue from 'vue'
import indexCom from './index.vue'

/* 子组件 */
const component = {
  props: {
    info: Object
  },
  data () {
    return {}
  },
  methods:{},
  template:` 
      <div>
        <p>{{info}}</p>
      </div>`,
}

/* 父组件*/
new Vue({
  el:'#root',
  data(){
    this.name = 'ssx'
    return{
      info: {
        name:'ssx'
      },
      arr:[1,2,3]
    }
  },
  methods:{
  },
  template:` 
      <div>
       <p>子组件</p>
       <!--<Comp :info="info"></Comp>-->
       <p>{{info}}</p>
       <p>{{name}}</p>
       <p v-for="item in arr">{{item}}</p>
      </div>`,
  components:{
    Comp: component
  },
  mounted(){
    this.info.age = 19
    // this.$set(this.info,'age',19)
    this.name = 'lili'
    // this.arr.push(4)
  }
})
