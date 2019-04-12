import comHeader from '../../common/components/header-nomal/headerOne.vue'
import goodsListTwo from '../../common/components/goodTypesTwo/goods.vue'
export default {
  name: "person",
  components:{
    comHeader,
    goodsListTwo
  },
  data(){
    return{
      goodsData: [
        {
          title: '[标题标题]',
          imgUrl: '/client/assets/img/indexPage/good1.jpg',
          tags: [
            {
              val: '满减',
              type: 0,
            }, {
              val: '红包',
              type: 1
            }, {
              val: '秒杀',
              type: 3,
            }],
          subVal: {
            val: '优惠限2包，第三包起按￥12',
            type: 0,
          },
          num: 10,
          price: 20,
          // disable: {
          //   val: '即将开始'
          // },
          iconType: {
            isNew: true,
            isOptimization: true
          }
        },
        {
          title: '[标题标题]',
          imgUrl: '/client/assets/img/indexPage/good1.jpg',
          tags: [
            {
              val: '满减',
              type: 0,
            }, {
              val: '红包',
              type: 1
            }, {
              val: '秒杀',
              type: 3,
            }],
          subVal: {
            val: '优惠限2包，第三包起按￥12',
            type: 0,
          },
          num: 10,
          price: 20,
          disable: {
            val: '即将开始'
          },
          iconType: {
            isNew: true,
            isOptimization: true
          }
        }
      ]
    }
  },
  methods:{
    gotoUrl(url){
      this.$router.push(url)
    }
  }

}
