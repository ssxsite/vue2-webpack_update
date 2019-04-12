import {setStore} from "../../../service/localStorageUtil";

export default {
  name: "counter",
  props:['fieldList',"customData"],
  data(){
    return{
      field: this.fieldList,
      custom: this.customData || 1,
    }
  },
  methods:{
    //商品数量变化
    numInit(type) {
      this.field.cartNum = type ? (this.field.cartNum * 1 + 1) : (this.field.cartNum * 1 - 1)
      this.custom == 1 ? this.getCartNumInit() : this.getCartNum()
    },
    //判断---商品数量是否可以增减,当填写的数小于1时。购物车页面执行判断是否删除）
    getCartNumInit() {
      if (this.field.cartNum < 1) {
        this.$emit("on-change", this.field);
      } else {
        this.getCartNum();
      }
    },

    //执行---购物车数量增减
    getCartNum() {
      setStore('')
      this.$store.state.updateCart = this.$store.state.updateCart == 0 ? 1 : 0;
    },
  },
  watch:{
    fieldList(val){
      this.field = val|| ""
    },
    customData(val) {
      this.custom = val || "";
    },
  }
}
