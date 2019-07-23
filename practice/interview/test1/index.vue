<template>
  <div>
    <p>{{val}}</p>
    <p>子组件-----------------------------</p>
    <Proxy :info="info" :val="val" @change="handleProxyChange" />
  </div>
</template>

<script>

import Proxy from "./Proxy.vue";

export default {
  components: {
    Proxy
  },
  data: () => {
    return {
      info: {},
      val:'ssx'
    };
  },
  mounted() {

  },
  methods: {
    handleProxyChange(val) {
      window.isUpdatingChildComponent = true;
    }
  }
};
</script>
