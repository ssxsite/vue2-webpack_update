/*
 v-model 实际是vue帮我们实现了双向绑定
 v-model 只能传入一个值，所以如有多个数据，只能传入对象
* */

import  Vue from 'vue'

const comp = {
  model:{
    prop:'valObj',
    event:'change' //默认是input事件,如果想监听change，可以改这里
  },
  props:['valObj'],
  template:`
    <div>
       <input type="text" :value="valObj.val1" @change="outPutVal($event)">
       <input type="text" :value="valObj.val2" @change="outPutVal2($event)">
    </div>
  `,
  methods:{
    outPutVal(e){
      this.valObj.val1 = e.target.value;
      this.$emit('change',this.valObj)
    },
    outPutVal2(e){
      this.valObj.val2 = e.target.value;
      this.$emit('change',this.valObj)
    }
  }
}

new Vue({
  el: '#root',
  components:{
    comp
  },
  data(){
    return {
      obj:{
        val1:'333',
        val2:'444'
      }
    }
  },
  template:`
    <div>
      <comp  v-model="obj" ></comp>
      <p>{{obj.val1}}------{{obj.val2}}</p>
    </div>
  `
})
