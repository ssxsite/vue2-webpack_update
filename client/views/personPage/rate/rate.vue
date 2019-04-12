<template>
  <div class="rateBox">
    <com-header :title="'评价订单'"></com-header>
    <!--内容-->

    <div class="gouwuc_kk gouwuc_kk_jies gouwuc_kk_pjsd">
      <ul>
        <li>
          <div class="diannao_shanp">
            <a href="XiangQ_Y.html"><h1><img src="/client/assets/img/indexPage/001.jpg"></h1></a>
            <div class="you">
              <p class="text_bt">评分</p>
              <div class="pj_xx">
                <p class="no"></p>
                <p class="no"></p>
                <p class="no"></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pjnr_txt">
      <textarea  placeholder="输入内容"></textarea>
      <span>最多可以填写500个字符</span>
    </div>
    <div class="saitu">
      <ul>
        <li><img src=""></li>
      </ul>
      <div>
        <input type="file" id="btn_file" style="display:none">
        <div class="shangc" onclick="F_Open_dialog()">
          <h1><img src="/client/assets/img/indexPage/shantu_img.png"></h1>
          <p>嗮图</p>
        </div>
        <h1 class="wenz_you">共<em>0</em>张图片还能上传<em>9</em>张！</h1>
      </div>
    </div>
    <div class="nimingfab">
      <input type="checkbox" name="">
      匿名发表
    </div>
    <div class="zuihann">
      <div class="shouh_dange_beijin dk"><a href="#">确 认</a></div>
    </div>
  </div>
</template>

<script src="./rate.js"></script>


<style lang="scss"scoped>
  @import "./rate.scss";
</style>

