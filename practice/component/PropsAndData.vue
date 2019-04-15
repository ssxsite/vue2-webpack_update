<template>
  <div>
    <p>props.info: {{ info }}</p>
    <p>props.name: {{ name }}</p>
    <p>props.list: {{ list }}</p>
    <p>data.a: {{ a }}</p>
    <p>data.obj:{{obj}}</p>
    <p>
      <button @click="handleBChange">change data.b</button>
      <button @click="handleAChange">change data.a</button>
      <button @click="handleCChange">change data.c</button>
      <button @click="handleObjChange">change data.obj</button>
      <button @click="handleListChange">change data.list</button>
    </p>
    <p>{{c}}</p>
  </div>
</template>
<script>
export default {
  name: "PropsAndData",
  props: {
    info: Object,
    name: String
  },
  data() {
    this.c='haha'
    return {
      a: "hello",
      b: "world",
      // c:'haha',
      obj:{},
      list:[]
    };
  },
  updated() {
    console.log("触发 PropsAndData updated");
  },
  methods: {
    handleBChange() {
      this.b = "vueb" + Date.now();
      console.log("data.b 发生了变化，但是并没有触发组件更新", this.b);
    },
    handleAChange(){
      this.a = "vuea" + Date.now();
      console.log("data.a 发生了变化，触发组件更新", this.a);
    },
    handleCChange(){
      this.c = "vuec" + Date.now();
      console.log("data.c 发生了变化，但是并没有触发组件更新", this.c);
    },
    handleObjChange(){
      this.obj.number = 1;
      // this.$set(this.obj, 'number', 1)
      console.log("this.obj 发生了变化，但是并没有触发子组件更新", this.obj);
    },
    handleListChange() {
      this.list.push(1, 2, 3);
      console.log("this.list 并没有发生变化，但是触发了子组件更新", this.list);
    }
  }
};
</script>
