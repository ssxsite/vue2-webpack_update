export default {
  name: "goodTypesOne",
  props:['goodDatas'],
  data(){
    return{
      data:this.goodDatas,
      showAll:false
    }
  },
  methods:{
    gotoDetail(){
      alert('gotoDetail')
    }
  },
  watch:{
    goodDatas(val){
      this.data = val
    }
  }
}
