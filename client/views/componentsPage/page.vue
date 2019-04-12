<template>
  <div class="redPacketPageBox">
    <p >红包卡券</p>
    <div class="redpack-wrap">
      <red-packet :redList="redList" :canUse="true" :type="2"></red-packet>
    </div>

    <p class="test-900 test-800 test-700">hahhah</p>


  </div>
</template>

<script src="./page.js"></script>

<style lang="scss" scoped>
  @import "./page.scss";
</style>
