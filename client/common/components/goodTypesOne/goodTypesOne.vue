<template>
    <div class="goodsWrap">
      <ul :class="['goodsList',{'show-all':showAll == true}]">
        <li class="goodsItem" v-for="item in data">
          <a href="javascript:void(0)" @click="gotoDetail">
            <h1>
              <img src="/client/assets/img/indexPage/good1.jpg" alt="商品图片">
            </h1>
            <div class="good-desc">
              <p>大杯,杯子,咖啡,饮料,桌子,酒 吧,酒馆,餐馆,室内</p>
              <span>提供免费WiFi</span>
            </div>
            <div class="price">
              <p>¥35.90</p>
              <h2>门面价</h2>
              <h2 class="price-dis">¥59.90</h2>
            </div>
          </a>
        </li>
      </ul>
      <div class="see-more" v-show="data.length > 3" @click="showAll = !showAll">
        <a href="javascript:void(0)" v-if="showAll== false">查看全部</a>
        <a href="javascript:void(0)" v-else>收起</a>
      </div>
    </div>

</template>

<script src="./goodTypesOne.js"></script>

<style lang="scss" scoped>
  @import "./goodTypesOne";
</style>
