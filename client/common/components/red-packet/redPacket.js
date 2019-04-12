import Vue from 'vue'
export default {
  name: "RedPacket",
  /*use 为1 商品详情页使用 默认为0 */
  props:["redList","redListIndex","canUse","type","use"],
  data(){
    return {
      datas:this.redList,
      dataIndex:this.redListIndex,
      useFlag:this.use?this.use:0,
    }
  },
  methods: {
    gernerateId: function (index){
      return "tip_" +index
    },
    /* 响应父组件查看更多商品 */
    seeMoreGoods(){
      console.log("111111")
      this.$emit('seeMoreGoods')
    },
    /* type 格式转换 */
    typeFilter(id){
      switch(id)
      {
        case 0:
         return '通用'
          break;
        case 1:
          return '限品牌'
          break;
        case 2:
          return '限品类'
          break;
        case 3:
          return '限商品'
          break;
        case 4:
          return '限单品'
          break;
        default:
          return ''
      }
    },

    /* 红包点击下来 */
    itemDownHandle(item,index){
      if(item.down === undefined){
        item.down = false
      }else {
        item.down = !item.down
      }
      this.$set(this.datas,index,item)
    },

    /* 去使用 */
    gotoUse(item){

      if(item.limitType === 4){//单品红包
        this.$router.push({path:'/good/detail',query:{goodsId: item.redPacketRuleList[0].goodsId}});
      }else {
        let searchItem ={
          id:item.id,
          name:'',
          type:'redPack',
          redPacketType:item.limitType
        }
        this.$router.push({name:'searchResult',params:{item:searchItem}});
      }
    },
    gotoapp:function () {
      this.$down.downLoad();
    },
    /*领取红包*/
    gotoLinqu:function (item) {
      let redPacketPath=`api/v5/red_packet_template/single_red_packet/receive`;
      this.token = this.$storage.get("token");
      this.$log("=====param",{singleRedPacketId:item.id,token:this.token});

      this.$ajax.post(redPacketPath,{singleRedPacketId:item.singleRedPacketId,token:this.token},(res)=>{
        this.$log("=====领取红包",res);
         this.$log("=====useFlag",this.useFlag);
        if(this.useFlag==1){

          this.$emit("refreshDataDetaiRed");
        }
        if(res.code==200){
          item.received=true;
        }
      },0,this.useFlag==1?1:0)
    },
    /* radio点击选择红包*/
    selectRedPacket(item){
      if(this.dataIndex === item.id){
        this.dataIndex = 0
      }else {
        this.dataIndex = item.id
      }
      setTimeout(()=>{
        this.$emit("radio-select",this.dataIndex)
      },100)

    },

    /* 时间处理 */
    restTime(time){
      let before = time.slice(5,10)
      let arr = before.split("");
      if(arr[0]==='0'){
        arr[0] = ''
      }
      if(arr[3]==='0'){
        arr[3] = ''
      }
      before = arr.join('')
      return before.replace(/[-]/,'.')
    }

  },
  watch: {
    redList(val) {
      this.datas = val;
    },
    redListIndex(val) {
      this.dataIndex = val;
    },
  },
  beforeMount(){

  },
  mounted() {

  }


}
