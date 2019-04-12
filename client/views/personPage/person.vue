<template>
  <div class="personPageBox">
    <com-header :title="'个人中心'" :url="'/index'"></com-header>
    <!--内容-->
    <div class="gerenzhonhx">
      <h1 class="grzx_toub_beij"><img src="/client/assets/img/personPage/sandnab.jpg"></h1>
      <div class="grzx_toux_fus">
        <div class="of"><h2><img src="/client/assets/img/personPage/sanc_nvz.jpg"></h2>
          <p @click="gotoUrl('/person/userInfo')">某某人的个人中心</p></div>
        <h3 class="shez_ann"><a href="GeRenZhongXin_SheZ.html"><img src="/client/assets/img/personPage/gear.png"></a>
        </h3>
      </div>
    </div>
    <div class="grzx_kuaij_k">
      <div class="grzx_quanbdd"><a href="javascript:void(0)">
        <h1><p @click="gotoUrl('/person/order')">全部订单</p><i></i></h1>
      </a></div>
      <ul>
        <li><a href="javascript:void(0)"><h1><img src="/client/assets/img/personPage/ger_1.png"></h1>
          <p>待付款</p></a></li>
        <li><a href="javascript:void(0)"><h1><img src="/client/assets/img/personPage/ger_2.png"></h1>
          <p>待收货</p></a></li>
        <li @click="gotoUrl('/person/order')"><a href="javascript:void(0)"><h1><img src="/client/assets/img/personPage/ger_3.png"></h1>
          <p>待提货</p></a></li>
        <li ><a href="javascript:void(0)"><h1><img src="/client/assets/img/personPage/ger_4.png"></h1>
          <p>待评价</p></a></li>
        <li @click="gotoUrl('/person/colletion')" ><a href="javascript:void(0)"><h1><img src="/client/assets/img/personPage/ger_5.png"></h1>
          <p>我的收藏</p></a></li>
        <li><a href="javascript:void(0)"><h1><img src="/client/assets/img/personPage/ger_6.png"></h1>
          <p>我的预约</p></a></li>
        <li><a href="javascript:void(0)"><h1><img src="/client/assets/img/personPage/ger_7.png"></h1>
          <p>账户安全</p></a></li>
        <li @click="gotoUrl('/person/jifen')"><a href="javascript:void(0)"><h1><img src="/client/assets/img/personPage/ger_8.png"></h1>
          <p>我的积分</p></a></li>
      </ul>
    </div>

    <!--商品-->
    <div data-v-beecd896="" class="rem_shangp_bt_b">
      <div data-v-beecd896="" class="waik"><em data-v-beecd896=""></em>
        <div data-v-beecd896="" class="mingz"><i data-v-beecd896=""></i>
          <p data-v-beecd896="" class="px26">热门商品</p></div>
        <em data-v-beecd896=""></em></div>
    </div>
    <goods-list-two :goodsData="goodsData" :type="2"></goods-list-two>
    <div class="jiazz">
      <p class="px22">拼命加载中...</p>
    </div>

  </div>
</template>

<script src="./person.js"></script>


<style lang="scss" scoped>
  @import "./person.scss";
</style>
