import Vue from 'vue'

new Vue({
  el:'#root',
  template:`
  <div>
  <!--<span>Name is : {{name}}</span>-->
  <br>
  <!--<span>Name is : {{getName()}}</span>-->
  <br>
  <span>{{number}}</span>
  <br>
  <input type="text" v-model="number">
  <br>
  <input type="text" v-model="fullName">
  <br>
  firstName:<input type="text" v-model="firstName">
  <br>
  lastName:<input type="text" v-model="lastName">
  <br><br><br>
  fullName:<p>{{fullName}}</p>
  <p>watch:和computed的区别是，可以得到newValue,oldValue,而computed实际上只是得到newValue,不能得到oldValue,所以watch功能更强大</p>
  <p>watchValue1:<input type="text" v-model="watchValue1"></input></p>
  <p>obj.a: <input type="text" v-model="obj.a"></input></p>
  <p>obj2.b: <input type="text" v-model="obj2.b"></input></p>
</div>
  `,
  data:{
    firstName: 'Shen',
    lastName: 'shuxin',
    number: 0,
    obj:{
      a:''
    },
    obj2:{
      b:''
    }
  },

  /* 当你在页面显示的数据是需要data里面的数据经过计算后才显示的，这种类型的数据适合放在computed里面 */
  /*computed 和watch 都是监听某个值，然后计算新的值，或者触发某个操作，一定不要去修改原来的值，否则可能会导致无限循环问题*/
  /*computed主要是监听某个值，然后第这个值计算，得到一个新的值；watch 则可以通过得到oldValue,newValue而作用更大，一般是监听某个值变化，触发某个函数*/


  computed: {//实际本质是get,set方法，然后vue还会进行缓存，只有在数据有变化的时候，才再次计算，提高性能
    // name () {
    //   console.log("computed name") // 当number变化的时候，computed name不会自行，因为fistName,lastName都没有变化
    //   return `${this.firstName} ${this.lastName}`
    // },
    /* computed get set方法一般不推荐使用，因为逻辑很复杂，经常会弄错 */
    fullName:{
      get: function () {//1.当一数据是根据多个变量的某一个变量变化的时候就触发的时候，用computed来可以节省代码，并且性能好，此时用watch的就会多很多代码
        return `姓：${this.firstName}名： ${this.lastName}`
      },
      // set: function (fullName) {
      //   let names = fullName.split(' ')
      //   this.firstName = names[1]
      //   this.lastName = names[2]
      // }
    },
    watchValue1(){
      console.log("watchValue1-------2222")
    }
  },
  methods: {
    getName: function () {
      console.log("getName---") // 当number变化的时候，getName也会一直执行
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch:{
    watchValue1(newVal,oldVal){
      // console.log("newVal",newVal);
      // console.log("oldVal",oldVal);
      console.log("watchValue1-------")
    },
    obj:{
      handler(){
       console.log("obj.a chaged!") //无反应
      },
      deep:true //加了这个就可以监听到obj的所有属性变化了，只有obj的任何一个属性变化，handler函数都会触发，所以这个是很消耗性能的
    },
    'obj2.b': {
      handler(){
        console.log("obj2.b changed!") //这个就是vue提供的语法糖，可以只观察某个对象的指定属性的变化，性能可以很好提高
      }
    }
  }
})
