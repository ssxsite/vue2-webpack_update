import comHeader from '../../../common/components/header-nomal/headerOne.vue'
export default {
  name: "cart",
  components:{
    comHeader
  },
  methods:{
    gotoUrl(url){
      this.$router.push(url)
    }
  }
}
