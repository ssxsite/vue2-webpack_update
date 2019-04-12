<template>
  <div>
    <div v-if="hasHeader">
      <!-- 搜索头部 -->
      <div class="search-header">
        <div class="conwrap flexBox">
          <router-link to='/city'>
            <div class="logo_k flexBox">
              <img class="iconMap" src="/client/assets/img/address.png"/>
              <span class="addressTip">{{currentCity.name}}</span>
              <span class="triangle-down"></span>
            </div>
          </router-link>
          <div class="shous_k flex-1">
            <span class="search-icon"></span>
            <input type="text" placeholder="请输入搜索内容">
          </div>
          <div class="right-icon">
            <div class="caid_img flexBox" @click="show = !show">
              <img src="/client/assets/img/indexPage/cd_1.png" alt="">
            </div>
            <ul class="zhu_daoh" v-show="show">
              <em class="sanjiao"></em>
              <li v-for="(item,index) in liDatas" :key="item.id" :class="[{'wu':index == liDatas.length-1 }]">
                <a href="javascript:void(0);" @click="goUrl(item)">{{item.val}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--tabs-->
      <div class="tabBox">
        <a v-for="(item,index) in navData" :class="index==navIndex?'list active':'list'" href="javascript:void(0);"
           v-text="item.val" @click="goUrl(item,index)" :title="item.val"></a>
        <a href="javascript:void(0);">111111111</a>
      </div>

    </div>


    <div :class="hasHeader?'routerViewBox':''">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div v-if="hasBottom">
      <!--底部导航-->
      <div class="dib_daoh_b">
        <ul>
          <li v-for="(item,index) in tabDatas" :key="index" @click="tabIndex = index">
            <a href="javascript:void(0)" @click="goUrl(item)">
              <div class="fup">
                <img :src="item.icon" alt="图标" v-show="tabIndex !== index">
                <img :src="item.activeIcon" alt="图标" v-show="tabIndex === index">
              </div>
              <p :class="[{'active':tabIndex === index}]">{{item.val}}</p>
            </a>
            <span class="num" v-if="item.hasNum">39</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script src="./page.js"></script>

<style lang="scss" scoped>
  @import "./page.scss";
</style>
