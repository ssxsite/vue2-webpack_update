/*
 先理解vue双向绑定是如何实现的
* */

import  Vue from 'vue'

const comp = {
  props:['initValue','otherVal'],
  data(){
    return{
      testVal:this.otherVal
    }
  },
  template:`
    <div>
       <input type="text" :value="initValue" @input="outPutVal($event)">
       <p>test:{{testVal}}</p>
       <button @click="testChange">改变test值</button>
    </div>
  `,
  methods:{
    outPutVal(e){
      this.$emit('input',e.target.value)
    },
    testChange(){
      setTimeout(()=>{
        this.testVal = '333'
        this.$emit('testChange',this.testVal)
      },1000)
    }
  }
}


/* 双先绑定方式1*/
// new Vue({
//   el: '#root',
//   components:{
//     comp
//   },
//   data(){
//     return {
//       initVal:'111'
//     }
//   },
//   template:`
//     <div>
//       <comp :initValue="initVal" @input="initVal = arguments[0]"></comp>
//       <p>{{initVal}}</p>
//     </div>
//   `
// })

/* 双先绑定方式1*/
new Vue({
  el: '#root',
  components:{
    comp
  },
  data(){
    return {
      initVal:'111',
      test:'222'
    }
  },
  template:`
    <div>
      <comp :initValue="initVal" v-model="initVal" :otherVal="test" @testChange="test=arguments[0]"></comp>
      <p>{{initVal}}</p>
    </div>
  `
})
