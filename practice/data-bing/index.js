import Vue from 'vue'

var gl = '111'
/* {{}} 可以读取js默认的全局变量，但是自定义的全局变量是读取不到的 */
new Vue({
  el: '#root',
  template: `
    <div id="aaa" v-on:click="test">
      {{isActive ? 'active' : 'not-active'}}
      <span class="span1">{{new Date()}}</span>
      <span :class="{active:!isActive,'test':true}">{{gl}ssx}</span> 
      <span :class="[isActive ? 'active' : '']">{{html}}</span>
      <p v-html="html" :id="p1" @click="test2"></p>
      <p :style="[styles,styles2]">{{getJoinArr(arr)}}</p>
      <input type="checkbox" :style="styles3">
    </div>
`,
  data: {
    isActive: false, // 注意boolean在显示的时候是被转换成字符串
    html: '<span>hehe</span>',
    p1: 'p1',
    arr: [1,2,3],
    styles: {
      color: 'red'
    },
    styles2: {
      fontSize: '24px'
    },
    styles3: {
      appearance: 'none', //消除浏览器默认样式，vue会自动加样式
      display: 'inlineBlock',
      width: '40px',
      height: '40px',
      backgroundColor: 'red'
    }
  },
  methods: {
    test: function () {
      alert('click div')
    },
    test2: function (e) {
      alert('click p')
      e.stopPropagation()
    },
    getJoinArr: function (arr) {
      //这个方法放在computed里面更好，因为你computed是只有在数据有变化的时候才计算，
      // 而method是每次渲染这个方法都会执行一次
      console.log("1111111")
      return arr.join()
    }
  }

})
