/*
 先理解vue双向绑定是如何实现的
* */

import  Vue from 'vue'

const comp = {
  props:['initValue'],
  data(){
    return{

    }
  },
  template:`
    <div>
       <input type="text" :value="initValue" @input="outPutVal($event)">
    </div>
  `,
  methods:{
    outPutVal(e){
      this.$emit('input',e.target.value)
    },
    testChange(){
      setTimeout(()=>{
        this.$emit('testChange',333)
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

/* 双先绑定方式2*/
new Vue({
  el: '#root',
  components:{
    comp
  },
  data(){
    return {
      initVal:'111'
    }
  },
  template:`
    <div>
      <comp  :initValue="initVal"   v-model="initVal" ></comp>
      <p>{{initVal}}</p>
    </div>
  `
})
