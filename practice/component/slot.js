/*
  定义一个模板组件，组件里面的内容可以根据需求来给
* */
import  Vue from 'vue'

const  comp1 = {
  template: `
    <div id="child">
    
      <div class="header">
          <slot name="header"></slot>
       </div>
      <div :style="styles" class="body">
        <slot name="body" :val1="val1" :val2="val2"></slot>
      </div>
      <div class="footer">
          <slot name="footer"></slot>
        </div>

    </div>
    
  `,
  data() {
    return {
      styles: {
        width: '200px',
        height:'150px',
        border: '1px solid red'
      },
      val1: 'liu lili111',
      val2: 'xiaoli'
    }
  }
}


new Vue({
  el: '#root',
  components: {
    comp1
  },
  data(){
    return {
      header: 'this is header',
      val1:'ssx'
    }
  },
  // 组件内容可以随意添加，因为组件有slot
  template: `
    <div id="parent">
      <comp1 ref="comp1">
          <span slot="header" ref="span1">{{header}}</span>
          <span slot="body" slot-scope="props">hello world {{props.val1}}---{{props.val2}}</span>  
          <span slot="footer">footer</span>
      </comp1>
    </div>
  `,
  mounted(){
    console.log("refs----",this.$refs.comp1,this.$refs.span1)
  }
})
