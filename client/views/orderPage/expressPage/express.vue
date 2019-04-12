<template>
    <div class="expressBox">
      <com-header :title="'选择快递'"></com-header>
      <!--内容-->
      <div class="peis_k">
        <dl class="on">
          <dt><strong>选择快递</strong></dt>
          <dd>
            <ul id="kuaidi">
              <li class="selected">申通快递</li>
              <li>神风快递</li>
              <li>月光宝盒空间穿梭快递</li>
            </ul>
          </dd>
        </dl>
      </div>
      <!--底部导航-->
      <!---->
      <div class="dib_daoh_b dib_daoh_b_quer">
        <a href="wanagid_JieSuan.html">确  认</a>
      </div>
    </div>
</template>

<script src="./express.js"></script>

<style lang="scss"scoped>
@import "./express.scss";
</style>
