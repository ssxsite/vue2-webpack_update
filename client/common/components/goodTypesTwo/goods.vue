<template>
  <!-- 横排 -->
  <div class="goodsBox" v-if="type==1">
    <div class="list" v-for="item in data">
      <div class="lt">
        <img class="img" :src="item.imgUrl"/>
        <span class="tip" v-if="item.iconType">
            <img v-if="item.iconType.isNew" class="img" src="/client/assets/img/indexPage/icon10.png" />
            <img v-if="item.iconType.isOptimization" class="img" src="/client/assets/img/indexPage/icon11.png" />
        </span>
      </div>
      <div class="rt">
        <div class="title" v-text="item.title"></div>
        <div class="tipBox">
          <span v-for="tag in item.tags" v-text="tag.val" :class="['tipList','icon'+tag.type]"></span>
        </div>
        <div class="priceBox">
          <span class="yen">&yen;</span>
          <span class="num" v-text="item.price"></span>
          <div class="numBox" v-if="!item.disable">
            <num-counter :fieldList="good" @on-change="alertHandle"></num-counter>
            <!--<inline-x-number :value="item.num" :min="0" width="40px" button-style="round"></inline-x-number>-->
          </div>
          <div v-if="item.subVal">
            <div v-text="item.subVal.val" :class="['sub','sub'+item.subVal.type]"></div>
          </div>

          <div v-if="item.disable" class="disabledTip" v-text="item.disable.val"></div>
        </div>

      </div>

    </div>
  </div>

  <!-- 竖排 -->
  <div class="goodsBox2 clear" v-else-if="type==2">
    <div class="list2" v-for="item in data">
      <div class="top">
        <img class="img" :src="item.imgUrl"/>
        <span class="tip" v-if="item.iconType">
            <img v-if="item.iconType.isNew" class="img" src="/client/assets/img/indexPage/icon10.png" />
            <img v-if="item.iconType.isOptimization" class="img" src="/client/assets/img/indexPage/icon11.png" />
        </span>
      </div>
      <div class="bottom">
        <div class="title" v-text="item.title"></div>
        <div class="tipBox">
          <span v-for="tag in item.tags" v-text="tag.val" :class="['tipList','icon'+tag.type]"></span>
        </div>
        <div class="priceBox">
          <span class="yen">&yen;</span>
          <span class="num" v-text="item.price"></span>
          <div class="numBox" v-if="!item.disable">
            <!--<inline-x-number :value="item.num" :min="0" width="40px" button-style="round"></inline-x-number>-->
            <num-counter :numVal="0"></num-counter>
          </div>
          <div v-if="item.subVal">
            <div  v-text="item.subVal.val" :class="['sub','sub'+item.subVal.type,'mul-ellipsis']"></div>
          </div>

          <div v-if="item.disable" class="disabledTip" v-text="item.disable.val"></div>
        </div>

      </div>

    </div>
  </div>
</template>
<script src="./goods.js"></script>
<style lang="scss" scoped>
  @import "./goods.scss";
</style>
