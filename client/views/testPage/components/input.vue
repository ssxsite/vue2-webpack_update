<template>
  <div>
    <input type="text" :value="title" @change="changeHandle($event)">
    <button @click="clickHandle">submit</button>
  </div>
</template>

<script>
  export default {
    name: "testInput",
    data(){
      return{
        title:''
      }
    },
    methods: {
      changeHandle: function (e) {
        this.title = e.target.value
      },
      clickHandle: function () {
        this.$emit('addTitle', this.title)
      }
    }
  }
</script>

<style scoped>

</style>
