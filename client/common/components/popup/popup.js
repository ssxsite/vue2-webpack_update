export default {
  name: "popup",
  props: ['isShowPup','position','width','popIndex','hideOnBlur','type'],
  data(){
    return{
      s_isShowPup:false,
      s_popIndex:this.popIndex ? this.popIndex : 999,
      s_hideOnBlur:this.hideOnBlur ? this.hideOnBlur :true
    }
  },
  methods:{
    clickPopHandle(){
      if(this.s_hideOnBlur === 'false'){
        this.s_isShowPup = true
      }else {
        this.s_isShowPup = false
      }
    },
    contentClick(e){
      e.stopPropagation()
    }
  },
  computed:{
    s_width(){
      return this.width+'%'
    }
  },
  mounted(){
    console.log("hideOnBlur",this.hideOnBlur)
  },
  watch:{
    isShowPup(val){
      this.s_isShowPup = val || false
    },
    s_isShowPup(val){
      this.$emit('changePopVal',val)
    }
  },
}
