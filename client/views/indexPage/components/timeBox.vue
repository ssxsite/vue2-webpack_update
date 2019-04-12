<template>
    <div class="timeBox">
      <div class="title">限量秒杀抢购中</div>
      <div class="rt">
        <div>
          <span>距结束</span>
          <span class="time" v-text="time[0]">2018</span>
          <span>:</span>
          <span class="time" v-text="time[1]">11</span>
          <span>:</span>
          <span class="msec" v-text="time[2]">11</span>
        </div>
      </div>
    </div>
</template>

<script src="./timeBox.js"></script>

<style lang="scss" scoped>
@import "./timeBox.scss";
</style>
