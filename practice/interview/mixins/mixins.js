/* 总结：像data,computed的，methods等，没有就加入，有以组件为主。除了钩子函数，是合并 */

import Vue from 'vue'
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },

  created: function () {
    console.log('混入对象的钩子被调用')
  },
  methods: {
    foof: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}

var vm = new Vue({
  el:'#root',
  template:`
    <div>
      <p>{{bar}}</p>
    </div>
  `,
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  computed:{
    a:function(){
      return this.bar * 2
    }
  },
  created: function () {
    console.log('组件钩子被调用')
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
    this.a = 4
  },
  methods: {
    barf: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('from self')
    }
  },
  mounted(){
    setTimeout(()=>{
      this.a = 5
    },5000)
  }
})

vm.foof() // => "foo"
vm.barf() // => "bar"
vm.conflicting() // => "from self"

