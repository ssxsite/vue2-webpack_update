<template>

    <div class="denglk">
      <div class="mz px24">账号：</div>
      <input type="text" :placeholder="field && field.placeholder &&field.placeholder.val ? '请输入'+field.placeholder.val :''"
             :type="field && field.type === 'password'? 'password': 'text'"
             :readonly="field && field.readonly? 'readonly':false"
             v-model="field.val" :maxlength="field.maxlength ? field.maxlength : 20"
             @focus="focusInp"
             @blur="blurInp"
      >
      <p class="errorMsg" v-if="errorMsg">{{errorMsg}}</p>
    </div>



</template>

<script src="./input.js"></script>

<style lang="scss" scoped>
@import "./input.scss";
</style>
