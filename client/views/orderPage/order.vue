<template>
    <div class="orderPageBox">
      <com-header :title="'确认订单'"></com-header>
      <!--内容-->
      <div class="jie_diz">
        <a href="javascript:void(0)" @click="gotoUrl('/address')">
          <div class="page-item-title pos-icon"><span class="span1 fb">无妞妞 </span> <span>13998888888</span></div>
          <div class="address">
            福建省福州市某某街道某某区某某某（某某公交站某某后面22号后面
            <i  class="right-to icon iconfont icon-fanhui2"></i>
          </div>
        </a>
      </div>
      <div class="caix"></div>

      <div class="peis_xz">
        <div class="kuaid">
          <a href="javascript:void(0)">
            <p>配送方式</p>
            <span @click="gotoUrl('/express')">申通快递<i  class="right-to icon iconfont icon-fanhui2"></i></span>
          </a></div>
        <div class="kuaid"><a href="javascript:void(0)"><p>发票信息</p>
          <span>电子发票明细<i  class="right-to icon iconfont icon-fanhui2"></i></span>
        </a></div>
      </div>
      <div class="zhifu_fangs">
        <h1>支付方式</h1>
        <ul id="oul">
          <li class="no">在线支付</li>
          <li>货到付款</li>
        </ul>
      </div>
      <div class="gei_shangj_ly">
        <h1>给商家留言：</h1>
        <input type="text" name="" placeholder="请您留言">
      </div>
      <div class="jies_qian">
        <div class="shangpjis">
          <h1>商品总计</h1>
          <p>
            <em>x1</em>
            <span>¥6588.00</span>
          </p>
        </div>
        <div class="shangpjis">
          <h1>运费</h1>
          <p>
            <span>¥00.00</span>
          </p>
        </div>

      </div>

      <div class="bottomBar flexBox">
        <div class="lt fb flex-1">
          <span class="f24">¥</span>
          <span class="f32 fb">199.99</span>
        </div>
        <div class="ct">
          <div class="tip">现在支付，预计次日送达</div>
        </div>
        <div class="rt" @click="zhifuPop=true">支付</div>
      </div>

    </div>
</template>

<script src="./order.js"></script>

<style lang="scss" scoped>
@import "./order.scss";
</style>
