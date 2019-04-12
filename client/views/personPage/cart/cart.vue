<template>
    <div class="cartBox">
      <com-header :title="'我的购物车'" :url="'/index'"></com-header>
      <!--内容-->
      <div class="weidl_dl">
        <p>立即登录，同步电脑和手机购物车中的商品 <a href="javascript:void(0)" @click="gotoUrl('/login')">登录</a></p>
      </div>
      <div class="gouwuc_kk">
        <ul>
          <li v-for="item in [1,2]">
            <div class="dianpmc_gw"><i class="i i-i"></i><a href="javascript:void(0)"><p class="px24">鼎力电脑专营旗舰店</p><em></em></a></div>
            <div class="diannao_shanp">
              <i class="i1 i1-i"></i>
              <a href="javascript:void(0)"><h1><img src="/client/assets/img/indexPage/001.jpg"></h1></a>
              <div class="you">
                <a href="javascript:void(0)"><p class="px24 bt">联想（Lenovo）IdeaPad 710S-13 13.3英寸超极本电脑(i3/....</p></a>
                <p class="xh">i3/4G内存/128固态/金色</p>
                <div class="youjfy">
                  <div class="goum_sl">
                    <p class="px26 jiaq">￥6588.00</p>
                    <div class="counter_box">
                      <i class="jian">-</i>
                      <input type="text" value="1">
                      <i class="jia">+</i>
                    </div>
                  </div>
                </div>
                <div class="bianj">
                  <a href="javascript:void(0)"><p><i></i>移入收藏</p></a>
                  <a href="javascript:void(0)" class="ayou"><p><i class="sc"></i>删除</p></a>
                </div>
              </div>
            </div>
            <div class="diannao_shanp">
              <i class="i1"></i>
              <a href="javascript:void(0)"><h1><img src="/client/assets/img/indexPage/001.jpg"></h1></a>
              <div class="you">
                <a href="javascript:void(0)"><p class="px24 bt">联想（Lenovo）IdeaPad 710S-13 13.3英寸超极本电脑(i3/....</p></a>
                <p class="xh">i3/4G内存/128固态/金色</p>
                <div class="youjfy">
                  <div class="goum_sl">
                    <p class="px26 jiaq">￥6588.00</p>
                    <div class="counter_box">
                      <i class="jian">-</i>
                      <input type="text" value="1">
                      <i class="jia">+</i>
                    </div>
                  </div>
                </div>
                <div class="bianj">
                  <a href="javascript:void(0)"><p><i></i>移入收藏</p></a>
                  <a href="javascript:void(0)" class="ayou"><p><i class="sc"></i>删除</p></a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--底部导航-->
      <!---->
      <div class="dib_daoh_b">
        <div class="gouwuc_ gouwuc_yem">
          <div class="zuo">
            <i class="i1"><p>全选</p></i>
          </div>
          <div class="zhong"><p>总计：<em>￥6588.00</em></p></div>
          <div class="you">
            <div class="goum">
              <a href="javascript:void(0)">去结算<em>（1）</em></a>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script src="./cart.js"></script>


<style lang="scss"scoped>
  @import "./cart.scss";
</style>

