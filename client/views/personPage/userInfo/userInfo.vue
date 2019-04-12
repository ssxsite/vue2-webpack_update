<template>
<div class="userInfoBox">
  <com-header :title="'个人信息'"></com-header>
  <!--内容-->
  <div class="shez_toux">
    <div class="toux_img">
      <h1>头像</h1>
      <h2><img src="/client/assets/img/personPage/sanc_nvz.jpg"></h2>
    </div>
    <div class="xiam_shez">
      <ul>
        <li>
          <h1>用户名</h1>
          <p>山的那边是还<em class="no"></em></p>
        </li>
        <li>
          <a href="javascript:void(0)">
            <h1>昵称</h1>
            <router-link to="/person/userInfo/nicheng">
              <p >ssx<em></em></p>
            </router-link>
          </a>
        </li>
        <li>
          <a href="GeRenZhongXin_SheZ_XingBie.html">
            <h1>性别</h1>
            <router-link to="/person/userInfo/xingbie">
              <p >女<em></em></p>
            </router-link>
          </a>
        </li>
        <li>
          <a>
            <h1>您的生日</h1>
            <p><input id="demo1" class="wchucrqi" type="text" readonly="" name="input_date" placeholder="未填写" data-lcalendar="1960-01-1,2019-12-31" /><em></em></p>
          </a>
        </li>
        <li>
          <a href="#">
            <h1>手机号码</h1>
            <p>1111*****000<em></em></p>
          </a>
        </li>
        <li>
          <a href="#">
            <h1>邮箱</h1>
            <p>未填写<em></em></p>
          </a>
        </li>
        <li>
          <a href="GeRenZhongXin_ZhangHuAnQuan.html">
            <h1>账户安全</h1>
            <p class="color-z">中<em></em></p><!--备注：如果安全等级是“高”，那么class=“color-x”-->
          </a>
        </li>
        <li>
          <a href="wanagid_DengLu.html">
            <h1>退出登录</h1>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script src="./userInfo.js"></script>


<style lang="scss"scoped>
  @import "./userInfo.scss";
</style>
