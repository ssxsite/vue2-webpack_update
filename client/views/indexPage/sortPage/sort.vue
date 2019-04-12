<template>
  <div class="sortPageBox">
    <!--商品分类-->
    <div class="shagp_lieb_dak" id="xuanxk">
      <div class="zuo_lieb">
        <input type="button" :class="tabIndex === 0? 'no_dq': ''" value="健康美食" @click="tabIndex = 0">
        <input type="button" :class="tabIndex === 1? 'no_dq': ''" value="电脑数码" @click="tabIndex = 1">
        <input type="button" :class="tabIndex === 2? 'no_dq': ''" value="服饰鞋帽" @click="tabIndex = 2">
      </div>
      <div class="youb_lieb_xiangq_k">
        <div class="xuanxk_kuang" style="display:block;" v-if="tabIndex===0">
          <div class="lieb_diy_bf" v-for="item in [1,2,3]">
            <p><em class="px26"></em><span class="px24">电脑整机</span></p>
            <ul>
              <li @click="gotoUrl('/index')"><a href="javascript:void(0)">笔记本</a></li>
              <li @click="gotoUrl('/index')"><a href="javascript:void(0)">游戏本</a></li>
              <li @click="gotoUrl('/index')"><a href="javascript:void(0)">平板电脑</a></li>
              <li @click="gotoUrl('/index')"><a href="javascript:void(0)">台式机</a></li>
              <li @click="gotoUrl('/index')"><a href="javascript:void(0)">一体机服务器</a></li>
              <li @click="gotoUrl('/index')"><a href="javascript:void(0)">外星人</a></li>
              <li @click="gotoUrl('/index')"><a href="javascript:void(0)">品牌机</a></li>
              <li @click="gotoUrl('/index')"><a href="javascript:void(0)">一体机</a></li>
            </ul>
          </div>
        </div>
        <div class="xuanxk_kuang" v-else-if="tabIndex===1">
          222
        </div>
        <div class="xuanxk_kuang" v-else-if="tabIndex === 2">
          333
        </div>
      </div>
    </div>
  </div>
</template>


<script src="./sort.js"></script>

<style lang="scss"scoped>
  @import "./sort.scss";
</style>
