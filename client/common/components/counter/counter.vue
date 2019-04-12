<template>
  <div class="counter_box">
    <i class="jian" @click="numInit(false)" v-if="field && field.cartNum>0">-</i>

      <input type="text" v-if="field && field.cartNum>0" v-model="field.cartNum">

    <i class="jia" @click="numInit(true)">+</i>
  </div>
</template>

<script src="./counter.js"></script>

<style lang="scss"scoped>
@import "./counter.scss";
</style>
