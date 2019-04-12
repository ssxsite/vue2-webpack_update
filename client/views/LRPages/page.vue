<template>
    <div class="LRPagesBox">
      <p @click="gotoUrl('/Login')"><button>登录</button></p>
      <p @click="gotoUrl('/register')"><button>注册</button></p>

    </div>
</template>

<script src="./page.js"></script>

<style lang="scss"scoped>
  @import "./page.scss";
</style>
