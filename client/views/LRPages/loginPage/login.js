import comHeader from '../../../common/components/header-nomal/headerOne.vue'
import MoInp from '../../../common/components/inp/input.vue'
import {setStore} from '../../../service/localStorageUtil.js'
export default {
  name: "login",
  components:{
    comHeader,
    MoInp
  },
  data(){
    return {
      fieldList: {
        tel: {
          placeholder: {
            val: "手机号",
            type: 0
          },
          val: "",
          type: "mobile",
          isError: 0,//0未验证，1正确，2错误，3数据为空
          max:11
        },
        pwd: {
          placeholder: {
            val: "密码",
            type: 0,
          },
          val: "",
          type: "password",
          isError: 0,
          errMsg:{
            empty:'密码不能为空',
            err:'密码格式不对'
          }
        },
      },
    }
  },
  methods:{
    login(){
      let testNum  = this.$refs.nodeTel.blurInp() * this.$refs.nodePwd.blurInp()
      if(testNum === 1){
        this.loginService()
      }
    },
    loginService() {
      let options = {
        account: this.fieldList.tel.val,
        password: this.fieldList.pwd.val
      }
      this.$ajax.post('api/v5/customer/login',options,0).then((res)=>{
        this.$router.replace("/index");
          setStore("token", res.datas.token);
          setStore("account", res.datas.account);
      })
    },
  }
}
