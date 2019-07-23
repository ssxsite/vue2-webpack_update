<template>
<!-- nomal -->
    <!--<div class="testPage">-->
      <!--<ul>-->
        <!--<router-link tag="li" to="/todo">-->
         <!--<h2>todo页面</h2>-->
          <!--<span class="right-icon"> > </span>-->
        <!--</router-link>-->
        <!--<router-link tag="li" to="/LRPages">-->
         <!--<h2>登录/注册页面</h2>-->
          <!--<span class="right-icon"> > </span>-->
        <!--</router-link>-->
      <!--</ul>-->
      <!--<div class="page-item">-->
        <!--<div class="line"></div>-->
      <!--</div>-->
      <!--<p style="margin-bottom: 20px">css 动画测试</p>-->
      <!--<div class="test1 transtion1"></div>-->
      <!--<div :class="['test2',runAnimation ? 'animation-test':'']" @click="runAnimation = true"></div>-->
      <!--<div class="container"></div>-->

      <!--<p>shadowDom 页面</p>-->
      <!--<video src=""></video>-->

      <!--&lt;!&ndash; scroll&ndash;&gt;-->
      <!--<div style="width: 100%;height: 400px;overflow: hidden;position: relative">-->
        <!--<ul @touchstart="onShortcutTouchStart">-->
          <!--<li v-for="group in scrollList"  class="list-group" ref="listGroup">-->
            <!--<h3 class="list-group-title">{{group.title}}</h3>-->
            <!--<p v-for="item in group.list" class="list-group-item">1111111111111111111</p>-->
          <!--</li>-->
        <!--</ul>-->
        <!--&lt;!&ndash; leftItems&ndash;&gt;-->
        <!--<ul class="leftList">-->
          <!--<li v-for="item in leftList">{{item}}</li>-->
        <!--</ul>-->
      <!--</div>-->

      <!--<p>rem-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
      <!--<div class="container2">-->
        <!--<div class="intro">-->
          <!--介绍1-->
        <!--</div>-->
        <!--<div class="intro">-->
          <!--介绍2-->
        <!--</div>-->
        <!--<div class="intro">-->
          <!--介绍3-->
        <!--</div>-->
        <!--<div class="intro">-->
          <!--介绍4-->
        <!--</div>-->
      <!--</div>-->

      <!--<p>preventDefaullt&#45;&#45;&#45;&#45;&#45;&#45;</p>-->

      <!--<div @click="progation">-->
        <!--<a href="http://www.baidu.com" id="testA" @click="prevent($event)">-->
          <!--点击我-->
        <!--</a>-->
      <!--</div>-->

      <!--<p style="margin-bottom: 20px">target,currentTarget</p>-->

      <!--<ul @click="test($event)">-->
       <!--<li v-for="(item,index) in list">{{item.id}}</li>-->
      <!--</ul>-->

      <!--<br>-->
      <!--<br>-->
      <!--<button @click="addCounter">点击</button>-->

      <!--<p style="margin-bottom: 30px">&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
      <!--<div>-->
        <!--<input type="text" v-model="name" style="border: 1px solid red;">-->
        <!--<button @click="add">添加</button>-->
      <!--</div>-->
      <!--<ul>-->
        <!--<li v-for="(item, i) in list" :key="item.id">-->
          <!--<input type="checkbox"> {{item.name}}-->
        <!--</li>-->
      <!--</ul>-->

    <!--</div>-->

<!-- nextTick-->
  <!--<div>-->
    <!--<div class="app">-->
      <!--<div ref="msgDiv">{{msg}}</div>-->
      <!--<div >Message got outside $nextTick: {{msg1}}</div>-->
      <!--<div >Message got inside $nextTick: {{msg2}}</div>-->
      <!--<div >Message got outside $nextTick: {{msg3}}</div>-->
      <!--<button @click="changeMsg">-->
        <!--Change the Message-->
      <!--</button>-->
    <!--</div>-->
  <!--</div>-->


  <!--mixins -->

<!--<div>-->
  <!--<p> {{msg}}</p>-->
  <!--<test-com></test-com>-->
  <!--<test-com-two></test-com-two>-->
  <!--<p>{{name}}</p>-->
<!--</div>-->

  <div>
    <!--<test-input @addTitle="addTitle" ></test-input>-->
    <!--<ul>-->
      <!--<li v-for="item in titles">{{item}}</li>-->
    <!--</ul>-->
    <button @click="addTest">addTest</button>
    <br>
    <br>
    <p>{{tempVal}}</p>
    <br>
    <ul>
      <li  v-for="(item, index) in discList" :key="index" class="item">
        <div class="icon">
          <img v-lazy="item.imgurl" width="60" height="60">
        </div>
        <div class="text">
          <h2 class="name" v-html="item.creator.name"></h2>
          <p class="desc" v-html="item.dissname"></p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script src="./test.js"></script>

<style lang="scss" scoped>
@import "./test.scss";
</style>
