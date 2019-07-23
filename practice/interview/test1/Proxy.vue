<template>
  <div>
    info: {{ info }}
    val: {{ val }}
    <input :value="info.name" @input="handleChangeName" />
    <input :value="info.age" @input="handleChangeAge" />
  </div>
</template>

<script>
import proxy from "./proxy";
export default {
  props: {
    info: Object,
    val: String
  },
  created() {
    this.temp = { name: "" };
    Object.keys(this.temp).forEach(key => {
      // proxy(this.info, this.temp, key);
      // this.$set(this.info, key, '')
    });
  },
  methods: {
    handleChangeName(e) {
      this.info.name = e.target.value;
      this.$forceUpdate();

      // this.$forceUpdate();
      this.$emit("change", e.target.value);
      this.val = 'hh'
    },
    handleChangeAge(e) {
      this.info.age = e.target.value;

      this.$forceUpdate();
      this.$emit("change", e.target.value);
    },
  }
};
</script>
