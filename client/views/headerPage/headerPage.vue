<template>
    <div class="headerPageBox">
      <!--<div class="leaderBox">-->
        <!--<div>部分商品库存变动或失效</div>-->
        <!--<span class="rt">订单实付满额即奖励红包</span>-->
      <!--</div>-->

      <!-- test -->
      <div id="address-choose">
        <div>
          <button @click="showOneBtnWindow()">显示popupwindow</button>
        </div>
        <!--<popup-->
          <!--:isShowPup="isShowPup"-->
          <!--@close="removeEditWindow()"-->
          <!--:popTitle="editTitle"-->
          <!--:position="'bottom'"-->
          <!--@changePopVal="changePopValHhandle"-->
          <!--&gt;-->
          <!--<div>111111111111</div>-->
          <!--<div class="buttonWrap">-->
            <!--<button class="btn btn-success br">保存</button>-->
            <!--<button class="btn btn-danger" style="float: right">删除</button>-->
          <!--</div>-->
        <!--</popup>-->
        <pay-panel :zhifuPop="zhifuPop" @changePopVal="changePopValHhandle"></pay-panel>
      </div>
    </div>
</template>


<script src="./headerPage.js"></script>

<style lang="scss" scoped>
  @import './headerPage.scss';
</style>
