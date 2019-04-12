<template>
    <div class="cityPage">

      <div class="header">
        城市选择
        <router-link to="/index">
          <div class="header-back">
            <i class="icon iconfont icon-fanhui1"></i>
          </div>
        </router-link>
      </div>

      <city-search :cities="cities"></city-search>

      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="selectCityHandle(item)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <!--显示点击的是哪一个字母-->
      <div class="showLetter" v-show="showLetter == true"><span>{{selectLetter}}</span></div>
      <!--城市索引查询-->
        <ul class="letter">
          <li  v-for="(item, key) of cities" :key="key" class="item">
            <a href="javascript:;" @click="selectLetterHandle(key)">{{key}}</a>
          </li>
        </ul>
      <!--城市列表-->
      <div class="container">
        <div class="city">
          <div class="city-list" v-for="(item,key,index) of cities" :key="key">
            <span class="city-letter" :id="key+1">{{key}}</span>
            <p data-id="innerItem.id" v-for="(innerItem,index) in item" @click="selectCityHandle(innerItem)">{{innerItem.name}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script src="./cityPage.js"></script>

<style lang="scss" scoped>
  @import "cityPage.scss";
</style>
