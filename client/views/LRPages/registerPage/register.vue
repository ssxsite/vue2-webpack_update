<template>
  <div class="registerBox">
    <com-header :title="'欢迎注册'"></com-header>
    <!-- tab -->
    <div class="zhuc_qieh">
      <div :class="tabIndex===0 ? 'zhuc' : ''" @click="tabIndex=0"><a href="javascript:void(0)" >注册账号</a></div>
      <div :class="tabIndex===1 ? 'zhuc' : ''" @click="tabIndex=1"><a href="javascript:void(0)" >申请入驻</a></div>
    </div>
    <!-- 表单-->
    <div class="denglu_k" v-if="tabIndex=== 0">
      <div class="denglk denglk_l">
        <div class="mz px24">用户名：</div>
        <input type="text" placeholder="">
      </div>
      <div class="denglk denglk_l">
        <div class="mz px24">设置密码：</div>
        <input type="text" placeholder="">
      </div>
      <div class="denglk denglk_l">
        <div class="mz px24">确认密码：</div>
        <input type="text" placeholder="">
      </div>
      <div class="denglk denglk_l">
        <div class="mz px24">手机号码：</div>
        <input type="text" placeholder="">
      </div>
      <div class="guoqvyzm">
        <div class="denglk denglk_l">
          <div class="mz px24">验证码：</div>
          <input type="text" placeholder="">
        </div>
        <a href="#">获取验证码</a>
      </div>
      <div class="dengl_anniu"><a href="#">提 交</a></div>
      <div class="wangjimm wangjimm_1">
        <p class="px22">
          <input type="checkbox" name="Car" class="px22">
          阅读并同意
          <a href="#">《wangdi通城用户注册协议》</a>
          <a href="#">《隐私协议》</a>
        </p>
      </div>
    </div>
    <div class="denglu_k" v-else-if="tabIndex=== 1">
      <div class="ruz_neir_kuang">
        <p>联系人姓名</p>
        <input type="text" name="">
        <p>手机号码</p>
        <input type="text" name="">
        <p>联系邮箱</p>
        <input type="text" name="">
        <p>所属行业</p>
        <input type="text" name="">
        <p>详情内容</p>
        <input type="text" class="liuyan_neir" name="">
        <p>验证码</p>
        <div class="ss">
          <input type="text" class="ruz_yanzm" name="">
          <h1><img src="/client/assets/img/loginPage/yanzm.png"></h1>
        </div>
      </div>
      <div class="dengl_anniu"><a href="#">提 交</a></div>
      <div class="fuwu_yizs">
        <h2>服务特惠</h2>
        <p>1.大批采购特价优惠</p>
        <p>2.一站式购齐订购服务</p>
        <p>3.灵活的支付方式</p>
        <p>4.优质配送服务</p>
        <p>5.无忧售后服务</p>
        <h2>服务窗口</h2>
        <p>1.直接拨打电话：400-6677-937</p>
        <p>2.服务邮箱：Ask@wangid.com</p>
      </div>
    </div>
  </div>
</template>

<script src="./register.js"></script>

<style lang="scss"scoped>
  @import "./register.scss";
</style>

