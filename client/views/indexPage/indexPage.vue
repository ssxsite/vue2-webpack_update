<template>
    <div class="indexPage">



      <!-- 页面头部 -->
      <div class="topBox">
        <!-- 轮播 -->
        <div class="swiperWrap">
          <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide v-for="item of swiperImgs" :key="item.id">
              <img class="swiper-img" :src="item.imgUrl" alt="图片">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <!-- 提示图标区域 -->
        <div class="infoBox">
          <div class="list">
            <img class="img" src="/client/assets/img/icon03.png"/>
            <span>满额免费送货</span>
          </div>
          <div class="list">
            <img class="img" src="/client/assets/img/icon04.png"/>
            <span>易鲜冷链配送</span>
          </div>
          <div class="list">
            <img class="img" src="/client/assets/img/icon05.png"/>
            <span>24小时无忧退换</span>
          </div>
        </div>

        <!-- 轮播图标区域 -->
        <div class="iconsBox">
          <swiper :options="swiperOption2">
            <swiper-slide v-for="(page, index) of pages" :key="index">
              <div
                class="icon"
                v-for="item of page"
                :key="item.id"
                @click="goUrl(item)"
              >
                <div class='icon-img'>
                  <img class='icon-img-content' :src='item.imgUrl' />
                </div>
                <p class="icon-desc">{{item.desc}}</p>
              </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>

      </div>

      <!--切换城市-->
      <div class="qieh_chengs flexBox">
        <div class="qieh_zhonj_kuang flex-1">
          <p>
            <span></span>{{currentCity.name}}
            <router-link to='/city'>
              <a href="javascript:void(0)">[切换城市]</a>
            </router-link>
            <em>|</em>
            <span class="fenh">打造特色本地购物商城</span>
          </p>
        </div>
      </div>

      <!-- 本地生活 -->
      <div class="bendi_sh">
        <div class="zuob">
          <div class="tup"><img src="/client/assets/img/jiank_meis.jpg"></div>
          <div class="wenz">
            <a href="#">
              <p class="p1">健康美食</p>
              <p>让生活   更健康</p>
              <p>更美味   更舒心</p>
            </a>
          </div>
        </div>
        <div class="bend_youb">
          <div class="shang">
            <p>热门区域</p>
            <ul class="ellipsis">
              <li><a href="#">云岩区</a></li>
              <li><a href="#">南明区</a></li>
              <li><a href="#">白云区</a></li>
              <li><a href="#">乌当区</a></li>
              <li><a href="#">花溪区</a></li>
              <li><a href="#">清镇市</a></li>
              <li><a href="#">开阳县</a></li>
            </ul>
          </div>
          <div class="liange_anniu">
            <div class="ds"><a href="#"><img src="/client/assets/img/b1.jpg"></a></div>
            <div class="ds"><a href="#"><img src="/client/assets/img/b2.jpg"></a></div>
          </div>
        </div>
      </div>
      <div class="henx"></div>

      <!-- 小轮播 -->

      <div class="swiper_container_2">
        <swiper :options="swiperOption3">
          <swiper-slide>
            <a href="#">
              <div class="kuaij_td_img"><img src="/client/assets/img/meij1.jpg"></div>
              <div class="kuaij_td_wenz"><p class="p2">鸡蛋还能这样吃</p><p class="p1">家用电器</p></div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
              <div class="kuaij_td_img"><img src="/client/assets/img/meij2.jpg"></div>
              <div class="kuaij_td_wenz"><p class="p2">鸡蛋还能这样吃</p><p class="p1">家用电器</p></div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
              <div class="kuaij_td_img"><img src="/client/assets/img/meij1.jpg"></div>
              <div class="kuaij_td_wenz"><p class="p2">鸡蛋还能这样吃</p><p class="p1">家用电器</p></div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#">
              <div class="kuaij_td_img"><img src="/client/assets/img/meij2.jpg"></div>
              <div class="kuaij_td_wenz"><p class="p2">鸡蛋还能这样吃</p><p class="p1">家用电器</p></div>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>


    <!-- 超值特价抢购中 -->
      <time-box :endTime="endTime"></time-box>

      <!-- 商品类型1 -->
      <div class="goodsBox">
        <h2 class="title">精选美食</h2>
        <goods-list-One :goodDatas="[1,2,3,4,5]"></goods-list-One>
      </div>


      <!-- 商品类型2-->

      <div class="goodBox2">
        <!--第一层-->
        <div class="louc_m louc_beij1">
          <div class="mingc">
            <em class="hua1"></em>
            <p>办公家具</p>
            <span>Office furniture</span>
            <a href="#">更多+</a>
          </div>
        </div>
        <div class="yic_beij">
          <div class="yic_sahng_b">
            <div class="zuo">
              <a href="#">
                <p>卧室家具</p>
                <span>爆款低至五折</span>
                <div class="zuo_tu_k"><img src="/client/assets/img/indexPage/yic_c.jpg"></div>
              </a>
            </div>
            <div class="you">
              <div class="you_shang">
                <a href="#">
                  <div class="wez">
                    <p class="px24">灯饰照明</p>
                    <span class="px22 color_h">发现品质生活</span>
                  </div>
                  <div class="uou_tu1_k"><img src="/client/assets/img/indexPage/yic_d.jpg"></div>
                </a>
              </div>
              <div class="youx">
                <div class="youx_bq">
                  <a href="#">
                    <div class="wez">
                      <p class="px24">办公文化</p>
                      <span class="px22 color_h">办公设计精选</span>
                    </div>
                    <div class="youx_tu1_k"><img src="/client/assets/img/indexPage/yic_bih.jpg"></div>
                  </a>
                </div>
                <div class="youx_bq youx_wubk">
                  <a href="#">
                    <div class="wez">
                      <p class="px24 wuj_color">五金工具</p>
                      <span class="px22 color_h">必买尖货儿</span>
                    </div>
                    <div class="youx_tu1_k"><img src="/client/assets/img/indexPage/yic_wuj.jpg"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="yic_xia_b">
            <div class="zuo">
              <a href="#">
                <div class="wez">
                  <p class="px24 wuj_color">烘烤 电脑版镜面外观</p>
                  <span class="px26">￥349.00</span>
                </div>
                <div class="youc_xia_tu_k"><img src="/client/assets/img/indexPage/yic_weibl.jpg"></div>
              </a>
            </div>
            <div class="zuo you_wux">
              <a href="#">
                <div class="wez">
                  <p class="px24 wuj_color">烘烤 电脑版镜面外观</p>
                  <span class="px26">￥349.00</span>
                </div>
                <div class="youc_xia_tu_k"><img src="/client/assets/img/indexPage/yic_s.jpg"></div>
              </a>
            </div>
          </div>
        </div>

        <!--第二层-->
        <div class="louc_m louc_beij2">
          <div class="mingc">
            <em class="hua2"></em>
            <p>手机数码</p>
            <span>Mobile phone digital</span>
            <a href="#">更多+</a>
          </div>
        </div>
        <div class="lianc_beij">
          <div class="lianc_shang">
            <div class="zuo">
              <a href="#">
                <div class="wez">
                  <p class="px24 wuj_color">热门手机</p>
                  <span class="px22 color_h">1元购手机</span>
                </div>
                <div class="tu_k"><img src="/client/assets/img/indexPage/erc_shouj.jpg"></div>
              </a>
            </div>
            <div class="you">
              <a href="#">
                <div class="wez">
                  <p class="px24 wuj_color">智能数码</p>
                  <span class="px22 color_h">大品牌</span>
                  <div class="lvsz px22">品质推荐  ></div>
                </div>
                <div class="tu_k"><img src="/client/assets/img/indexPage/erc_diann.jpg"></div>
              </a>
            </div>
          </div>
          <div class="lianc_shang">
            <div class="zuo">
              <a href="#">
                <div class="wez">
                  <p class="px24 wuj_color color_1">游戏组装</p>
                  <span class="px22 color_h">精品推荐</span>
                </div>
                <div class="tu_k"><img src="/client/assets/img/indexPage/erc_dian2.jpg"></div>
              </a>
            </div>
            <div class="zuo">
              <a href="#">
                <div class="wez">
                  <p class="px24 wuj_color color_2">硬件存储</p>
                  <span class="px22 color_h">精品推荐</span>
                </div>
                <div class="tu_k"><img src="/client/assets/img/indexPage/erc_nc.jpg"></div>
              </a>
            </div>
            <div class="zuo zuo_wu">
              <a href="#">
                <div class="wez">
                  <p class="px24 wuj_color color_3">摄影产品</p>
                  <span class="px22 color_h">看的见的岁月</span>
                </div>
                <div class="tu_k"><img src="/client/assets/img/indexPage/erc_xiangj.jpg"></div>
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- 短轮播 -->
      <div class="swiperWrap3">
        <swiper :options="swiperOption4" ref="mySwiper">
          <!-- slides -->
          <swiper-slide >
            <a href="#">
              <img src="/client/assets/img/indexPage/xia_banner2.jpg" class="swiper-img" alt="">
            </a>
          </swiper-slide>
          <swiper-slide >
            <a href="#">
              <img src="/client/assets/img/indexPage/xia_banner1.jpg" alt="" class="swiper-img">
            </a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>

      <!-- 商品类型3 -->
      <div class="rem_shangp_bt_b">
        <div class="waik">
          <em></em>
          <div class="mingz"><i></i><p class="px26">热门商品</p></div>
          <em></em>
        </div>
      </div>
      <goods-list-two :goodsData="goodsData" :type="1"></goods-list-two>
      <goods-list-two :goodsData="goodsData" :type="2"></goods-list-two>

      <!-- 精选菜谱-->
      <div class="rem_shangp_bt_b" style="margin: 10px 0">
        <div class="waik">
          <em></em>
          <div class="mingz"><i></i><p class="px26">精选菜谱</p></div>
          <em></em>
        </div>
      </div>
      <div class="quickSwiperWrap">
        <swiper :options="swiperOption5" ref="mySwiper" >
          <!-- slides -->
          <swiper-slide v-for="item of swiperImgs" :key="item.id">
            <div class="item">
              <img class="itemImg" :src="item.imgUrl"/>
              <div class="swiperInfoBox">
                <div class="leaderTip">简单快手</div>
                <div class="swiperTitle">标题标题</div>
                <div class="sub">副标题副标题副标题</div>
                <div class="rt">
                  <div class="list">
                    <img class="img" src="/client/assets/img/indexPage/icon_time_03.png"/>
                    <span>30分钟</span>
                  </div>
                  <div class="list">
                    <img class="img" src="/client/assets/img/indexPage/icon_time_003.png"/>
                    <span>30分钟</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!--新品推荐-->
      <div class="rem_shangp_bt_b" style="margin: 10px 0">
        <div class="waik">
          <em></em>
          <div class="mingz"><i></i><p class="px26">新品推荐</p></div>
          <em></em>
        </div>
      </div>
      <div class="newSwiperWrap">
        <swiper :options="swiperOption6" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item of swiperImgs" :key="item.id" >
            <div class="item">
              <img class="itemImg" :src="item.imgUrl"/>
              <div class="swiperInfoBox">
                <div class="leaderTip">简单快手</div>
                <div class="swiperTitle">标题标题</div>
                <div class="sub">副标题副标题副标题</div>
                <div class="rt">
                  <div class="list">
                    <img class="img" src="/client/assets/img/indexPage/icon_time_03.png"/>
                    <span>30分钟</span>
                  </div>
                  <div class="list">
                    <img class="img" src="/client/assets/img/indexPage/icon_time_003.png"/>
                    <span>30分钟</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>



      <!-- 努力加载中 -->
      <div class="jiazz">
        <p class="px22">拼命加载中...</p>
      </div>

      <!--底部-->
      <div class="dib_bj">
        <div class="diyi">
          <ul>
            <li><a href="#">登录</a></li>
            <p>丨</p>
            <li><a href="#">注册</a></li>
            <p>丨</p>
            <li><a href="#">反馈</a></li>
            <p>丨</p>
            <li><a href="#">返回顶部</a></li>
          </ul>
        </div>
        <div class="liange_bb">
          <div class="bb">
            <a href="#">
              <div class="bb_img"><img src="/client/assets/img/indexPage/chupb.png"></div>
              <p>触屏版</p>
            </a>
          </div>
          <div class="bb">
            <a href="#">
              <div class="bb_img"><img src="/client/assets/img/indexPage/diannb.png"></div>
              <p class="diann_color">电脑版</p>
            </a>
          </div>
        </div>
        <div class="gs_beian">
          <p>京公网安备：11010602030054号</p>
          <p>京ICP备：14012449号 黔ICP证：B2-20140009号</p>
        </div>
      </div>





    </div>
</template>

<script src="./indexPage.js"></script>

<style lang="scss" scoped>
  @import "./indexPage.scss";
</style>
