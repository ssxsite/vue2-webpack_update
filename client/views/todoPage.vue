<template>
  <div id="todoPage">
    <div id="cover"></div>
    <AppHeader></AppHeader>
    <AppTodo></AppTodo>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import AppHeader from '../layout/header.vue'
  import AppFooter from '../layout/footer.jsx'
  import AppTodo from '../views/todo/todo.vue'

    export default {
      name: "todoPage",
      components: {
        AppHeader,
        AppFooter,
        AppTodo
      },
      created:function () {
        //打印日志统一使用this.$log(key,value)
        // this.$log('created')
        console.log()
      },
    }
</script>

<style scoped>
  @import '../assets/styles/base.css';
  #todoPage {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  #cover{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #555;
    opacity: 0.5;
    z-index: -1;
  }
  .container{
    padding: 10px;
  }
</style>
