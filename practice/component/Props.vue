<template>
  <div>
    name: {{ name }}
    <br />
    type: {{ type }}
    <br />
    list: {{ list }}
    <br />
    isVisible: {{ isVisible }}
    <br />
    propE: {{ propE }}
    <br />
    <button @click="handleClick">change type</button>
  </div>
</template>

<script>
export default {
  name: "PropsDemo",
  /* 如果不想让未定义属性加载在根元素上，inheritAttrs设置为false即可*/
  // inheritAttrs: false,
  /* 这样写props不好，可读性差，不方便后期维护 */
  // props: ['name', 'type', 'list', 'isVisible'],
  props: {
    name: String,
    type: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].includes(value);
      }
    },
    list: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
  },
  methods: {
    handleClick() {
      // 不要这么做、不要这么做、不要这么做
      // this.type = "warning";
      // 可以，还可以更好
      this.onChange(this.type === "success" ? "warning" : "success");
    }
  }
};
</script>
