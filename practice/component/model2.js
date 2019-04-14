/*
 v-model 实际是vue帮我们实现了双向绑定
 v-model 只能传入一个值，所以如有多个数据，可以传入对象
* */

import  Vue from 'vue'

const comp = {
  model:{
    prop:'valObj',
    event:'change' //默认是input事件,如果想监听change，可以改这里
  },
  props:{
    valObj:{
      type:Object,
      default:() => {}
    },
    zipCode:String,
    phone:String
  }
  ,
  template:`
    <div>
       <input type="text" :value="valObj.val1" @change="outPutVal($event)">
       <input type="text" :value="valObj.val2" @change="outPutVal2($event)">
       <input :value="zipCode" type="number" placeholder="邮编" @input="handleZipCodeChange"/>
       <input :value="phone" type="number" placeholder="电话" @change="handlePhoneChange"/>
    </div>
  `,
  methods:{
    outPutVal(e){
      this.$emit('change',{...this.valObj,val1:e.target.value})
    },
    outPutVal2(e){
      this.valObj.val2 = e.target.value;
      this.$emit('change',this.valObj)
    },
    handleZipCodeChange(e){
      this.$emit("updateZipCode", e.target.value);
    },
    handlePhoneChange(e){
      this.$emit("update:phone", e.target.value);
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
      },
      zipCode:'',
      phone:''
    }
  },
  template:`
    <div>
      <comp  v-model="obj" :zipCode="zipCode" @updateZipCode="val => (zipCode = val)" :phone.sync="phone"></comp>
      <p>{{obj.val1}}------{{obj.val2}}</p>
      <p>邮编：{{zipCode}}</p>
      <p>电话：{{phone}}</p>
    </div>
  `
})
