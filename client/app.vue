<template>
    <div id="app">
      <router-view></router-view>
      <div id="showTipBox"></div>
    </div>
</template>


<script>
import {setStore} from './service/localStorageUtil.js'
export default {
  name: 'App',
  components: {
  },
  mounted(){
    setStore("cartNum",0)
    // setStore("token",'a4fa5afae8754e2880f634c0e77cc936')
}
    }
</script>

<style scoped>
</style>
