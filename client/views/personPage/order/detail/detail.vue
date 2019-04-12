<template>
    <div class="orderDetailBox">
      <com-header :title="'订单详情'"></com-header>
      <!--内容-->
      <div class="shez_toux">
        <div class="toux_img">
          <p class="yiwanc">已完成</p>
        </div>
        <div class="dd_xiangq_sp_k">
          <dl>
            <dt>
              <i></i>
              <p><a href="#">鼎力电脑专营店</a></p>
              <p><a href="#" class="lianx">联系客服 </a></p>
              <span>共1件商品</span>
            </dt>
            <dd>
              <a href="#">
                <h1><img src="/client/assets/img/indexPage/erc_dian2.jpg"></h1>
                <div class="wenz">
                  <p>联想（Lenovo）IdeaPad 7.3英寸超极本电脑(i3)</p>
                  <span>13.3英寸</span>
                </div>
              </a>
              <div class="ddxq_jiaq">
                <p>¥29.90</p>
                <span>x1</span>
              </div>
            </dd>
          </dl>
        </div>
        <div class="min_xi">
          <p><em>商品金额：</em>¥100.90 （在线支付）</p>
          <p><em>收货地址：</em>某某某某某某某某某某某某某某某</p>
          <p><em>收货人：</em>某某某 182****0710</p>
          <p><em>配送方式：</em>某某快递  64000550114</p>
          <p><em>邮箱：</em>111***111@qq.com</p>
          <p><em>送货时间：</em>2018-00-11 星期四</p>
          <p><em>发票信息：</em>电子发票个人明细</p>
        </div>
        <div class="zuizong_jies">
          <p><em>商品总额</em><span>¥29.90</span></p>
          <p><em>返现</em><span>¥0.00</span></p>
          <p><em>运费</em><span>¥0.00</span></p>
        </div>
        <div class="xiangq_liang_ann">
          <a href="GeRenZhongXin_ShenQingShouHou.html">申请售后</a>
          <a href="#" class="sc">删除订单</a>
        </div>
      </div>
    </div>
</template>

<script src="./detail.js"></script>


<style lang="scss"scoped>
  @import "./detail.scss";
</style>
