<template>
    <div class="addressBox">
      <com-header :title="'收货地址'"></com-header>
      <!--内容-->
      <div class="shouhdz_hk">
        <div class="shouh_zk">
          <div class="shouh_dange_beijin" v-for="(item,index) in [1,2,3]" :key="index" @click="itemIndex = index">
            <div class="shang">
              <div class="yuanq"><i :class="itemIndex === index?'cl':''"></i></div>
              <div class="mz">
                <p><em>潘中全</em> <em>182*****710</em></p>
                <p>州贵阳市云岩区城区下合群路达亨大厦1606 </p>
              </div>
            </div>
            <div class="boanjk"><a href="javascript:void(0)">编辑</a></div>
          </div>
        </div>
      </div>
      <div class="dib_daoh_b">
        <div class="gouwuc_ Xinz" @click="gotoUrl('/add-address')">
          <a href="javascript:void(0)">新添收货地址</a>
        </div>
      </div>

    </div>
</template>

<script src="./address.js"></script>

<style lang="scss" scoped>
@import "./address.scss";
</style>
