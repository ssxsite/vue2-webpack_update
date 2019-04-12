export default {
  name: "commonHeader",
  props:['title','url'],
  methods:{
    goBack(url){
      // this.$router.replace('/index')
      if(url){
        this.$router.push(url)
      }else {
        this.$router.back()
      }
    }
  }
}
