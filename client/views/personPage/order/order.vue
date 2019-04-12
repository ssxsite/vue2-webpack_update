<template>
  <div class="personOrderBox">
    <com-header :title="'订单列表'"></com-header>
    <!--内容-->
    <div class="dingd_k">
      <div class="dind_daoh">
        <ul>
          <li><a class="no" href="javascrip:void(0)">全部</a></li>
          <li><a href="javascrip:void(0)">待支付</a></li>
          <li><a href="javascrip:void(0)">待收货</a></li>
          <li><a href="javascrip:void(0)">待评价</a></li>
        </ul>
      </div>
      <div class="gouwuc_kk gouwuc_kk_ddxq">
        <ul>
          <li>
            <div class="dianpmc_gw"><a href="javascrip:void(0)"><p class="px24">鼎力电脑专营旗舰店  ></p><em></em></a></div>
            <div class="dingd_hao"><p>订单号：64000550114  </p><a href="javascrip:void(0)" @click="gotoUrl('/person/order/detail')">查看详情</a></div>
            <div class="diannao_shanp">
              <a href="javascrip:void(0)"><h1><img src="/client/assets/img/indexPage/001.jpg"></h1></a>
              <div class="you">
                <a href="XiangQ_Y.html"><p class="px24 bt">联想（Lenovo）IdeaPad 710S-13 13.3英寸超极本电脑(i3/....</p></a>
                <p class="xh">i3/4G内存/128固态/金色</p>
                <div class="youjfy">
                  <div class="goum_sl">
                    <div class="counter_box">
                      <span>x1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="qqq_jia">
              <div class="zuo">
                <p>状  态：<em>已签收</em></p>
                <p>总  价：<em class="qq">￥6588.00</em></p>
              </div>
              <div class="you">
                <p>
                  <a @click="gotoUrl('/person/rate')" href="javascript:void(0)">去评价</a>
                  <a href="javascrip:void(0)" class="color_1">再次购买</a>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="dianpmc_gw"><a href="javascrip:void(0)"><p class="px24">鼎力电脑专营旗舰店  ></p><em></em></a></div>
            <div class="dingd_hao"><p>订单号：64000550114  </p><a href="javascrip:void(0)" @click="gotoUrl('/person/order/detail')">查看详情</a></div>
            <div class="diannao_shanp">
              <a href="XiangQ_Y.html"><h1><img src="/client/assets/img/indexPage/001.jpg"></h1></a>
              <div class="you">
                <a href="javascrip:void(0)"><p class="px24 bt">联想（Lenovo）IdeaPad 710S-13 13.3英寸超极本电脑(i3/....</p></a>
                <p class="xh">i3/4G内存/128固态/金色</p>
                <div class="youjfy">
                  <div class="goum_sl">
                    <div class="counter_box">
                      <span>x1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="qqq_jia">
              <div class="zuo">
                <p>状  态：<em>已签收</em></p>
                <p>总  价：<em class="qq">￥6588.00</em></p>
              </div>
              <div class="you">
                <p>
                  <a href="javascrip:void(0)" class="color_2">去付款</a>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="meiy_gd">没有更多订单了</div>
    </div>

  </div>
</template>

<script src="./order.js"></script>


<style lang="scss"scoped>
  @import "./order.scss";
</style>

