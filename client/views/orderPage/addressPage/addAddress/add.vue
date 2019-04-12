<template>
    <div class="addAddressPage">
      <com-header :title="'新添收货地址'"></com-header>
      <div class="shouhdz_hk">
        <div class="shouh_zk">
          <div class="shouh_dange_beijin">
            <div class="denglu_k denglu_k_k">
              <div class="denglk denglk_l">
                <div class="mz px24">收货人：</div>
                <input type="text" placeholder="">
              </div>
              <div class="denglk denglk_l">
                <div class="mz px24">联系方式：</div>
                <input type="text" placeholder="手机号码">
              </div>
              <div class="denglk denglk_l">
                <div class="mz px24">所在地区：</div>
                <div class="browser">
                  <!--选择地区-->
                  <section class="express-area">
                    <a id="expressArea" href="javascript:void(0)">
                      <dl>
                        <dt></dt>
                        <dd>澳门特别行政区 &gt; 嘉模堂区</dd>
                      </dl>
                    </a>
                  </section>
                  <!--选择地区弹层-->
                  <!--<section id="areaLayer" class="express-area-box" style="bottom: -100%;">-->
                    <!--<header>-->
                      <!--<h3>选择地区</h3>-->
                      <!--<a id="backUp" class="back" href="javascript:void(0)" title="返回" style="display: none;"></a>-->
                      <!--<a id="closeArea" class="close" href="javascript:void(0)" title="关闭"></a>-->
                    <!--</header>-->
                    <!--<article id="areaBox">-->
                      <!--<ul id="areaList" class="area-list"><li onclick="selectP(0);">北京市</li><li onclick="selectP(1);">天津市</li><li onclick="selectP(2);">河北省</li><li onclick="selectP(3);">河南省</li><li onclick="selectP(4);">山西省</li><li onclick="selectP(5);">山东省</li><li onclick="selectP(6);">内蒙古自治区</li><li onclick="selectP(7);">辽宁省</li><li onclick="selectP(8);">吉林省</li><li onclick="selectP(9);">黑龙江省</li><li onclick="selectP(10);">上海市</li><li onclick="selectP(11);">江苏省</li><li onclick="selectP(12);">浙江省</li><li onclick="selectP(13);">福建省</li><li onclick="selectP(14);">江西省</li><li onclick="selectP(15);">安徽省</li><li onclick="selectP(16);">湖北省</li><li onclick="selectP(17);">湖南省</li><li onclick="selectP(18);">广东省</li><li onclick="selectP(19);">广西壮族自治区</li><li onclick="selectP(20);">海南省</li><li onclick="selectP(21);">重庆市</li><li onclick="selectP(22);">四川省</li><li onclick="selectP(23);">贵州省</li><li onclick="selectP(24);">云南省</li><li onclick="selectP(25);">西藏自治区</li><li onclick="selectP(26);">陕西省</li><li onclick="selectP(27);">甘肃省</li><li onclick="selectP(28);">青海省</li><li onclick="selectP(29);">宁夏回族自治区</li><li onclick="selectP(30);">新疆维吾尔自治区</li><li onclick="selectP(31);">台湾省</li><li onclick="selectP(32);">香港特别行政区</li><li onclick="selectP(33);">澳门特别行政区</li></ul>-->
                    <!--</article>-->
                  <!--</section>-->
                  <!--遮罩层-->
                  <div id="areaMask" class="mask" style="display: none;"></div>
                  <!--<script src="js/jquery.area.js"></script>-->
                </div>
              </div>
              <div class="denglk denglk_l">
                <div class="mz px24">详细地址：</div>
              </div>
            </div>
          </div>
          <div class="shouh_dange_beijin dk"><a href="javascript:void(0)">确 认</a></div>
        </div>
      </div>
    </div>
</template>

<script src="./add.js"></script>

<style lang="scss"scoped>
@import "./add.scss";
</style>
