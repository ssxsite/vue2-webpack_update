import Vue from 'vue'

new Vue({
  el:'#root',
  template:`
  <div>
    <p :id="divId"></p>
    <!-- 指令1： v-bind:id 缩写就是 :id  -->
    <p v-bind:id="divId"></p>
    <!-- 指令2 v-text-->
    <p v-text="text"></p>
    <!-- v-html -->
    <p v-html="html"></p>
    <!-- v-show -->
    <p>v-show</p>
    <p id="test2" v-show="active">test2</p>
    <!-- v-if 直接删除掉节点，再次显示，需要重新绘制节点，所以比较消耗性能 -->
    <p id="test3" v-if="active">test3</p>
    <span v-else>else con------</span>
    
    <!-- v-if, v-else-if, v-else -->
    <p v-if="num <= 0">11111</p>
    <p v-else-if="num > 0 && num < 5">3333</p>
    <p v-else>666666</p>
    
    <!-- v-for 不仅可以遍历数组，也可以遍历对象 -->
    <ul>
    <!--给每个数据列绑定一个唯一的key，这样如果下次渲染的时候，如果是同一个数据，那么这个数据对应的
    列表DOM就不用再次渲染，就可以提高性能-->
      <li v-for="(item,index) in arr" :key="item">{{item}}---{{index}}</li>
    </ul>
    <ul>
      <li v-for="(val,key,index) in obj">{{val}}---{{key}}---{{index}}</li>
    </ul>
    
    <!-- v-model 默认只能绑定input，vue也支持绑定自定义组件 -->
    <input type="checkbox" v-model="active">
    
    <!-- v-model 绑定数组-->
    <p>v-model 绑定数组</p>
    <input type="checkbox" v-model="arr2" value="1">
    <input type="checkbox" v-model="arr2" value="2">
    <input type="checkbox" v-model="arr2" value="3">
    
    <!-- v-model绑定checkbox -->
    <input type="radio" value="one" v-model="picked">
    <input type="radio" value="two" v-model="picked">
    
    <!-- v-model.number -->
    <div>
      text3: <input type="text" v-model.number="text3">
    </div>
   
    <!-- v-model.trim-->
    <input type="text" v-model.trim="text4">
    <!-- v-model.lazy -->
    <input type="text" v-model.lazy.number="text5">
    <p>{{text6}}</p>
    
    <!-- v-pre 不进行特殊解析，可以显示花括号-->
    <div v-pre>{{text7}}</div>
    
    <!-- v-once 只渲染一次值，后面数据变化也不再渲染，有时可以提高效率-->
    <p v-once>{{text3}}</p>
    
    <!-- v-html 不安全，容易引发xss-->
    <div v-html="xssText"></div>
    <p>解决方法：</p>
    <pre>{{xssText}}</pre>
    
    <!--@click的特殊用法-->
    <div @click.stop="doSomething($event)">vue取消事件冒泡</div>
    <div @click.prevent="doSomething($event)">vue阻止默认事件</div>
  </div>
  `,
  data: {
    divId:'id1',
    text:'hello',
    active: false,
    html:'<span>hahha</span>',
    num:8,
    arr:['li1','li2','li3'],
    arr2:[],
    picked:'',
    obj:{
      a:'123',
      b:'456',
      c:'789'
    },
    text3:'1',
    text4: '',
    text5: '',
    text6: '',
    text7: '',
    xssText:'<script type="text/javascript">\n' +
    '    xmlDoc=loadXMLDoc("books.xml");\n' +
    '    document.write("xmlDoc is loaded, ready for use");\n' +
    '  </script>'
  },
  watch: {
    text5(val){
      if (val < 5) {
        console.log("请输入大于5的数字")
      }else {
        this.text6 = val+'$'
      }
    }
  },
  mounted(){
    this.text3 = '1111'
  }
})
