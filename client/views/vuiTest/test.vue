<template>
  <div>
    <v-switch type="primary" v-model="show_derive" :trueValue="1" :falseValue="0"></v-switch>
    <p>{{show_derive}}</p>
    <v-switch type="success" v-model="show_derive2" :trueValue="true" :falseValue="false"></v-switch>
    <p>{{show_derive2}}</p>
    <v-switch type="warning" v-model="show_derive3" :trueValue="'真'" :falseValue="'假'"></v-switch>
    <p>{{show_derive3}}</p>
    <v-switch type="danger" v-model="show_derive4" :trueValue="'是'" :falseValue="'否'"></v-switch>
    <p>{{show_derive4}}</p>
  </div>
</template>

<script>
  import vSwitch from 'components/Switch/1.0.0';
  export default {
    name: "test",
    components:{vSwitch},
    data(){
      return{
        show_derive:0,
        show_derive2:false,
        show_derive3:'假',
        show_derive4:'是'
      }
    }
  };
</script>

<style scoped>

</style>
