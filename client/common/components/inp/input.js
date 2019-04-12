export default {
  name: "validateInput",
  props:["fieldList"],
  data(){
    return {
      field:this.fieldList,
      errorMsg:'',
      regList: {
        password: /^[\w!@#$%^&*.]{6,12}$/,//密码最少6位
        empty: /^[\S]+$/,//非空校验
        mobile: /^1[3|4|5|7|8]\d{9}$/,
        email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        charNum: /^[A-Za-z0-9]+$/,//必须数字和字母
        charChina: /^[\u4e00-\u9fa5]+$/,//必须为中文
        college: /^[A-Za-z0-9\u4e00-\u9fa5]+$/,//必须为中文数字字母
        ip: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
      },
    }
  },
  methods:{
    focusInp() {
      this.field.isError = 0;
      this.errorMsg = ''
    },
    blurInp(){
      if (this.field.val == '') {
        this.errorMsg = this.field.errMsg == undefined ? this.field.placeholder.val + "不能为空" : this.field.errMsg.empty;
        this.field.isError = 3;
      }else {
        let bol = this.isReg(this.field.val, this.regList[this.field.type]);
        this.field.isError = bol ? 1 : 2;
        if(!bol){
          this.errorMsg = this.field.errMsg == undefined ? this.field.placeholder.val + "格式不对" : this.field.errMsg.err;
        }
      }
      return this.field.isError
    },
    isReg: function (str, reg) {
      return reg.test(str)
    },
  },
  watch:{
    fieldList(val){
      this.field = val || null
    },
  }
}
