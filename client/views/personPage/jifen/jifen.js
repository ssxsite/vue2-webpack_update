import comHeader from '../../../common/components/header-nomal/headerOne.vue'
export default {
  name: "jifen",
  components:{
    comHeader
  },
  data(){
    return {
      tabIndex:0
    }
  },
  methods:{
    gotoUrl(url){
      this.$router.push(url)
    }
  }
}
