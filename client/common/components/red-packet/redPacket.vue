<template>
  <!-- 可用红包 -->
  <div class="container-fluid">
    <div class="row">
      <!--可选择radio类型-->
      <div :class="['col-12','col-lg-3 ','col-md-4 ','col-sm-6','redList',{'wu':index == datas.length -1},'']" v-for="(item,index) in datas" v-if="type == 1 && canUse == true" >
        <div class="top">
          <div class="rt" @click="selectRedPacket(item)">
            <div class="lt">
              <div class="yenBox sin-ellipsis">
                <span>&yen;</span>
                <span class="num fb">{{item.value}}</span>
              </div>
              <div class="f-gray man sin-ellipsis">满{{item.orderAmount}}元可用</div>
            </div>
            <div style="width: 96%" >
              <div class="leader mul-ellipsis">
                <span class="leaderTip" >{{typeFilter(item.limitType)}}</span>
                <span class="f32 mid-alin" v-if="item.redPacketTheme">{{item.redPacketTheme}}</span>
                <span class="f32 mid-alin" v-else>{{item.typeDesc}}</span>
              </div>
              <div class="time sin-ellipsis">
                有效期:
                <span v-if="item.beginDate==undefined">{{item.validDays}}天内有效</span>
                <span v-if="item.beginDate">{{restTime(item.beginDate)}}-{{restTime(item.endDate)}}</span>
              </div>
            </div>
            <span class="right-radio" v-if="dataIndex == item.id"></span>
          </div>

          <div class="roundBox">
            <div class="hr"></div>
            <div class="roundOne"></div>
            <div class="roundTwo"></div>
          </div>
          <div class="tipBox"  @click="itemDownHandle(item,index)">
            <div  :class="['tip',{'tip-up': item.down == false},{'tip-down': item.down == true || item.down === undefined}]" :id="gernerateId(index)">
              <span v-if="item.limitType === 0">全场商品通用</span>
              <span v-if="item.limitType === 3 || item.limitType === 4">
                限用商品 : &nbsp;
                <span v-for="letter in item.redPacketRuleDescList">{{letter}};&nbsp;</span>
              </span>
              <span v-if="item.limitType === 2">
                限<span v-for="letter in item.redPacketRuleDescList.slice(0,item.redPacketRuleDescList.length-1)">{{letter}}、&nbsp;</span><span>{{item.redPacketRuleDescList[item.redPacketRuleDescList.length-1]}}</span>品类商品可用
              </span>
              <span v-if="item.limitType === 1">
                限<span v-for="letter in item.redPacketRuleDescList.slice(0,item.redPacketRuleDescList.length-1)">{{letter}}、&nbsp;</span><span>{{item.redPacketRuleDescList[item.redPacketRuleDescList.length-1]}}</span>品牌商品可用
              </span>
              <span :class="['more-icon',{'active':item.down == true || item.down === undefined}]"></span>
            </div>
            <div  class="tip-up-line"  v-if="index == datas.length -1 && item.down == false"></div>
          </div>
        </div>
      </div>


      <!-- 去使用button类型-->

    <div class="col-12 col-lg-4 col-md-6 col-sm-6 res-padding"  v-for="(item,index) in datas" v-if="type == 2  && canUse == true">
      <div :class="['redList',{'wu':index == datas.length -1}]"  >
        <div class="top">
          <div class="rt">
            <div class="lt">
              <div class="yenBox sin-ellipsis">
                <span>&yen;</span>
                <span class="num fb">{{item.value}}</span>
              </div>
              <div class="f-gray man sin-ellipsis">满{{item.orderAmount}}元可用</div>
            </div>
            <div style="width: 96%" >
              <div class="leader mul-ellipsis">
                <span class="leaderTip" >{{typeFilter(item.limitType)}}</span>
                <span class="f32 mid-alin" v-if="item.redPacketTheme">{{item.redPacketTheme}}</span>
                <span class="f32 mid-alin" v-else>{{item.typeDesc}}</span>
              </div>
              <div class="time sin-ellipsis">
                有效期:
                <span v-if="item.beginDate==undefined">{{item.validDays}}天内有效</span>
                <span v-if="item.beginDate">{{restTime(item.beginDate)}}-{{restTime(item.endDate)}}</span>
              </div>
            </div>
          </div>
          <div class="roundBox">
            <div class="hr"></div>
            <div class="roundOne"></div>
            <div class="roundTwo"></div>
          </div>
          <div class="tipBox"  @click="itemDownHandle(item,index)">
            <div  :class="['tip',{'tip-up': item.down == false},{'tip-down': item.down == true || item.down === undefined}]" :id="gernerateId(index)">
              <span v-if="item.limitType === 0">全场商品通用</span>
              <span v-if="item.limitType === 3 || item.limitType === 4">
                限用商品 : &nbsp;
                <span v-for="letter in item.redPacketRuleDescList">{{letter}};&nbsp;</span>
              </span>
              <span v-if="item.limitType === 2">
                限<span v-for="letter in item.redPacketRuleDescList.slice(0,item.redPacketRuleDescList.length-1)">{{letter}}、&nbsp;</span><span>{{item.redPacketRuleDescList[item.redPacketRuleDescList.length-1]}}</span>品类商品可用
              </span>
              <span v-if="item.limitType === 1">
                限<span v-for="letter in item.redPacketRuleDescList.slice(0,item.redPacketRuleDescList.length-1)">{{letter}}、&nbsp;</span><span>{{item.redPacketRuleDescList[item.redPacketRuleDescList.length-1]}}</span>品牌商品可用
              </span>
              <span :class="['more-icon',{'active':item.down == true || item.down === undefined}]"></span>
            </div>
            <div  class="tip-up-line"  v-if="index == datas.length -1 && item.down == false"></div>
          </div>
          <button v-if="useFlag==0" class="right-btn red-btn f24" @click="gotoUse(item)">去使用</button>
        </div>
      </div>
    </div>


    </div>

  </div>

</template>

<script src="./redPacket.js"></script>

<style lang="scss" scoped>
  @import "redPacket.scss";
</style>
