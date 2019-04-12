import popup from '../popup/popup.vue'

export default {
  name: "payPanel",
  components: {
    popup
  },
  props: ["zhifuPop", "token", "pageName", "orderObj"],
  data() {
    return {
      isShowPup: false,//临时控制支付弹窗
      popShow: false,//支付弹窗

      balance: 30, //钱包余额
      isWeixin: true,
      zhifuIndex: 0,//支付方式
      inputBOX: false,
      payErrorMsg: '',//支付错误信息
      password: '',//支付密码
    }
  },
  methods: {
    removeEditWindow: function () {   //关闭新建与编辑地址选择对话框
      this.isShowPup = false;
    },
    /* 获取面板pop值，实现双向数据绑定 */
    changePopValHhandle(val) {
      this.isShowPup = val
      this.$emit('changePopVal', val)
    },
    changeInputPopValHhandle(val) {
      this.inputBOX = val
    },
    cancelPay() {
      this.isShowPup = false
    },
    confirmPay() {
      this.inputBOX = true
    },
    /* 支付密码输入框 */
    cancelInputBox() {
      this.inputBOX = false
      this.payErrorMsg = ''
      this.password = ''
      // this.kickBack()
    },
    passWordAfterPay() {
      // this.kickBack()
    },
    /* 解决ios在输入法弹出后页面不能回弹，导致页面错误，而按钮点击无反应的问题，除此之外，也可以用fixed来暂时固定背景也是可以的*/
    kickBack() {
      setTimeout(() => {
        document.body.scrollTop = 0
      }, 10)
    }

  },
  watch: {
    zhifuPop(val) {
      this.isShowPup = val || false
    }
  },
  mounted() {

  }
}
