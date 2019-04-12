import numCounter from "../counter/counter.vue"
export default {
  name: 'MoGoods',
  props:["goodsData","type"],
  components: {
    numCounter
  },
  data() {
    return {
      data:this.goodsData,
      good:{
        id:1,
        cartNum:1
      }
    }
  },
  methods: {
    alertHandle(){
      alert("删除商品？")
    }
  },
  watch: {
    goodsData(val) {
      console.log(val)
      this.data = val;
    },

  }
}

