import comHeader from '../../../common/components/header-nomal/headerOne.vue'
export default {
  name: "address",
  components:{
    comHeader
  },
  data(){
    return {
      itemIndex:0
    }
  },
  methods:{
    gotoUrl(url){
      this.$router.push(url)
    }
  }
}
