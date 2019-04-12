<template>
  <div class="collectionBox">
    <com-header :title="'我的收藏'"></com-header>
    <!--内容-->
    <div class="dingd_k">
      <!--tab-->
      <div class="dind_daoh">
        <ul>
          <li><a :class="tabIndex===0 ? 'no' : ''"  href="javascript:void(0)" @click="tabIndex=0">商品</a></li>
          <li><a :class="tabIndex===1 ? 'no' : ''"  href="javascript:void(0)" @click="tabIndex=1">店铺</a></li>
        </ul>
      </div>

      <!--内容-->
      <div v-if="tabIndex===0">
        <div class="gouwuc_kk gouwuc_kk_ddxq">
          <ul>
            <li v-for="item in [1,2,3]">
              <div class="dianpmc_gw dianpmc_gw_1"></div>
              <div class="diannao_shanp">
                <a href="javascript:void(0)"><h1><img src="/client/assets/img/indexPage/001.jpg"></h1></a>
                <div class="you">
                  <a href="javascript:void(0)"><p class="px24 bt">联想（Lenovo）IdeaPad 710S-13 13.3英寸超极本电脑(i3/....</p></a>
                  <p class="xh">i3/4G内存/128固态/金色</p>
                  <div class="youjfy">
                    <div class="goum_sl">
                      <p class="px26 jiaq">￥6588.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="qqq_jia">
                <div class="zuo">
                  <p>收藏时间：</p>
                  <p>2017-07-20</p>
                </div>
                <div class="you">
                  <p>
                    <a href="javascript:void(0)">加入购物车</a>
                    <a href="javascript:void(0)" class="color_1">取消收藏</a>
                  </p>
                </div>
              </div>
            </li>

          </ul>
        </div>
        <div class="meiy_gd">没有更多收藏的商品了</div>
      </div>
      <div v-else-if="tabIndex===1">
        1
      </div>

    </div>
  </div>
</template>

<script src="./collection.js"></script>


<style lang="scss"scoped>
  @import "./collection.scss";
</style>

