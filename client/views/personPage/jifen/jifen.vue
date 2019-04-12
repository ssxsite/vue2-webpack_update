<template>
    <div class="jifenBox">
      <com-header :title="'我的积分'"></com-header>
      <!--内容-->
      <div class="jif_kuang">
        <!-- tabs-->
        <ul class="jif_daoh">
          <li :class="tabIndex===0 ? 'no' : ''" ><a href="javascript:void(0)" @click="tabIndex=0">我的积分</a><i></i></li>
          <li :class="tabIndex===1 ? 'no' : ''"><a href="javascript:void(0)" @click="tabIndex=1">专属积分</a><i></i></li>
          <li :class="tabIndex===2 ? 'no' : ''"><a href="javascript:void(0)" @click="tabIndex=2">积分商城</a><i></i></li>
        </ul>

        <div v-if="tabIndex===0">
          <div class="jifen_shue">
            <div>
              <p>可用积分</p>
              <h1>2100</h1>
            </div>
            <div>
              <p>将要过期的积分</p>
              <h1 class="color">0</h1>
            </div>
            <span class="tis"><em>*</em> 温馨提示：积分将会在每年年底过期，尽量提前使用。</span>
          </div>
          <div class="shouru_mxi">
            <h1 class="jifenshouru_biaot">积分收入明细</h1>
            <ul class="ul_mx">
              <li v-for="item of [1,2,3]">
                <a href="javascript:void(0)">
                  <h1><img src="/client/assets/img/indexPage/001.jpg"></h1>
                  <div class="zhong_wenz">
                    <p>大杯,杯子,咖啡,饮料,桌子,酒 吧,酒馆,餐馆,室内</p>
                    <span>2017年10月30日 10:42:17</span>
                  </div>
                </a>
                <div class="mx">+15</div>
              </li>
            </ul>
          </div>
          <div class="jiazz">
            <p class="px22">拼命加载中...</p>
          </div>
        </div>

        <div v-else-if="tabIndex===1">
          <!--内容-->
          <div class="jif_kuang">
            <ul class="ul_youhj_k">
              <li v-for="item in [1,2,3]">
                <div class="con">
                  <h1><p>积分额<em>250</em></p><span>全店通用</span></h1>
                  <div class="xiangq">
                    <p>使用条件:满1199.00</p>
                    <p>有效时间:2017.11.11 至 2017.11.11  </p>
                    <p><a href="javascript:void(0)">马克华菲官方旗舰店</a></p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="jiazz">
              <p class="px22">没有更多了</p>
            </div>
          </div>
        </div>
        <div v-else-if="tabIndex===2">
          2
        </div>

      </div>
    </div>
</template>

<script src="./jifen.js"></script>


<style lang="scss"scoped>
  @import "./jifen.scss";
</style>

