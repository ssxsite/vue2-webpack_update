import popup from '../../common/components/popup/popup.vue'
import payPanel from '../../common/components/pay-panel/payPanel.vue'
export default {
  name: "headerPage",
  components: {
    popup,
    payPanel
  },
  data() {
    return {
      isShowing: false,

      zhifuPop: false,
      editTitle: "新建收货地址",
      addressRegion: {

      }
    }
  },
  methods: {
    showOneBtnWindow: function(){  //显示新建收货地址对话框（有一个按钮）
      this.zhifuPop = true;
    },

    /* 获取面板pop值，实现双向数据绑定 */
    changePopValHhandle(val){
      this.zhifuPop = val
    },
  }
}
