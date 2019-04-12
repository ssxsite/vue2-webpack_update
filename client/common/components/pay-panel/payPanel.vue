<template>
  <div>
    <!-- 支付面板 -->
    <popup :isShowPup="isShowPup" :position="'bottom'" @changePopVal="changePopValHhandle" :hideOnBlur="'false'">
      <div class="zhifuWrap">
        <div class="title po-r">
          <span class="f32  fb">请选择支付方式1</span>
          <span class="cancel f-gray f40 po-a" @click="cancelPay">×</span>
        </div>
        <div class="content">
          <div class="msg line-after po-r">
            <span >请在 <span class="fb f-orange">11:30</span> 之前完成支付</span>
            <span>金额 </span>
            <span class="fb f-orange" > ¥30 </span>元
          </div>
          <div class="zhifu-item line-after flexBox" @click="zhifuIndex = 0;">
            <span class="icon weixin"></span>
            <span class="flex-1">微信支付</span>
            <span class="right-radio" v-if="zhifuIndex == 0"></span>
          </div>
          <div class="zhifu-item line-after flexBox" @click="zhifuIndex = 1;">
            <span class="icon zhifubao"></span>
            <span class="flex-1">支付宝<span class="f-gray-l" >（冻品在线APP可用）</span></span>
            <span class="right-radio" v-if="zhifuIndex == 1"></span>
          </div>
          <div class="zhifu-item line-after flexBox" @click="zhifuIndex = 2;">
            <span class="icon qianbao"></span>
            <span class="flex-1">钱包余额
                   <span class="f-gray-l" v-if="balance > 0"> (¥ {{balance}})</span>
                   <span class="f-gray-l" v-else> (¥0)</span>
                </span>
            <span class="right-radio" v-if="zhifuIndex == 2"></span>
          </div>
        </div>
        <div :class="['con-btn',zhifuIndex == 1 || (zhifuIndex == 2 && balance <= 0) || (zhifuIndex == 0 && !isWeixin)?'gray':'',(zhifuIndex == 1 || !isWeixin)?'no-click-btn':'self-btn']" @click="confirmPay">
          确认支付
        </div>
      </div>
    </popup>

    <!-- 输入密码弹框 -->
    <popup
      :isShowPup="inputBOX"
      @changePopVal="changeInputPopValHhandle"
      :popIndex="1003"
      :hideOnBlur="'false'"
    >
      <div class="inputBox">
        <div :class="['box-hd',payErrorMsg === ''?'':'error']" v-text="payErrorMsg === ''?'请输入支付密码':payErrorMsg">
        </div>
        <div class="input-wrap line-after">
          <input type="password" v-model.trim="password" placeholder="请输入支付密码">
        </div>
        <div class="box-bottom flexBox">
          <a href="javascript:;" class="return-btn" @click="cancelInputBox">返回</a>
          <a href="javascript:;" class="btn sure line-left" @click="passWordAfterPay">确认支付</a>
        </div>
      </div>
    </popup>

  </div>

</template>

<script src="./payPanel.js"></script>

<style lang="scss" scoped>
@import "./payPanel.scss";
</style>
