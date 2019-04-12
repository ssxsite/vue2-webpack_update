<template>
    <div class="redPacketPage">
      <div v-for="(item,index) in redList2" >
        <div class="redList type2" @click="redList2Index = index">
          <div class="top">
            <div class="lt">
              <!--<span class="border-left"></span>-->
              <div class="yenBox">
                <span>&yen;</span>
                <span class="num fb">10</span>
                <div>满100元可用</div>
              </div>
            </div>
            <div class="rt">
              <div class="leader">
                <span class="leaderTip">限商品</span>
                <span class="f32">我是标题</span>
              </div>
              <div class="time">有效期：9.01-9.30</div>
              <div class="tipBox">

                <div  :class="[{'tip': item.down == true},{'tip-down': item.down == false}]" @click="item.down = !item.down">
                  限商品限商品限商品限商品限商品限商品限商品限商品限商品限商品
                  <span :class="['jiao',{'triangle-down':item.down == true},{'triangle-up':item.down == false}]"></span>
                </div>
              </div>
            </div>
            <span class="right-btn" >去凑单</span>
          </div>
          <div class="bottom">
            <span class="f-red">不可用原因：不可用原因</span>
            <span class="f-gray f-right" @click="canUseGoodsPop=true">未到日期未到日期</span>
          </div>
        </div>
      </div>
      <div class="yunfeiItemWrap">
        <div class="blueList mar-bottom" @click="yunfeiListId = index" v-for="(item,index) in yunfeiList">
          <div class="top">
            <div class="" :class="['lt',{'checked': yunfeiListId == index}]">
              <!--<span :class="['border-left',{'checked': yunfeiListId == index}]"></span>-->
              <div class="yenBox">
                <span>¥</span> <span class="num fb">10</span>
              </div>
            </div>
            <div class="rt">
              <div class="f32">我是标题</div>
              <div class="time">有效期：9.01-9.30</div>
            </div>
            <div class="right-radio-wrap flexBox">
              <span class="right-radio" v-if="yunfeiListId == index"></span>
            </div>
          </div>
          <div class="bottom" v-if="item.haseBottom">
            <span class="f-red">不可用原因：</span>
            <span class="f-gray">未到日期未到日期</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script src="./redPacket.js"></script>

<style lang="scss" scoped>
@import "./redPacket.scss";
</style>
