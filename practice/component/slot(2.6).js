/*
  定义一个模板组件，组件里面的内容可以根据需求来给
   本demo演示Vue2.6之后的slot写法
*/
import Vue from 'vue'

const comp1 = {
  template: `
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot :val1="val1" :val2="val2"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
</div>
  `,
  data() {
    return {
      styles: {
        width: '200px',
        height: '150px',
        border: '1px solid red'
      },
      val1: 'liu lili',
      val2: 'xiaoli'
    }
  }
}


new Vue({
  el: '#root',
  components: {
    comp1
  },
  data() {
    return {
      header: 'this is header',
      val1: 'ssx'
    }
  },
  // 组件内容可以随意添加，因为组件有slot
  template: `
    <div id="parent">
      <comp1 ref="comp1">
          <template v-slot:header>
            <h1>Here might be a page title</h1>
          </template>
          <template v-slot:default="slotProps">
            <p>A paragraph for the main content. {{ slotProps.val1 }}</p>
            <p>And another one. {{ slotProps.val2 }}</p>
          </template>
         <template v-slot:footer>
            <p>Here's some contact info</p>
         </template>
      </comp1>
      <p>parent</p>
    </div>
  `,
  mounted() {
    console.log("refs----", this.$refs.comp1, this.$refs.span1)
  }
})
