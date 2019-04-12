<template>
  <div class="loginBox">
    <com-header :title="'欢迎登录'"></com-header>
    <div class="denglu_k">

      <mo-inp ref="nodeTel" :fieldList="fieldList.tel"></mo-inp>
      <mo-inp ref="nodePwd" :fieldList="fieldList.pwd"></mo-inp>

      <div class="dengl_anniu">
          <span @click="login" class="redBtn">登 录</span>
      </div>
      <div class="dengl_anniu">
        <router-link to='/register' class="zc">
          <span >立即注册</span>
        </router-link>
      </div>
      <div class="wangjimm">
        <a href="javascript:void(0)">名榜授权登录！</a>
        <a href="javascript:void(0)" class="you">忘记密码？</a>
      </div>
    </div>
  </div>
</template>

<script src="./login.js"></script>

<style lang="scss"scoped>
  @import "./login.scss";
</style>

