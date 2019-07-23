 import store from "../../store/index.js";
 import {getStore} from '../../service/localStorageUtil.js'


 import { mapState } from 'vuex'
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
 import goodsListOne from '../../common/components/goodTypesOne/goodTypesOne.vue'
 import goodsListTwo from '../../common/components/goodTypesTwo/goods.vue'
 import tabs from '../../common/components/pages-commponents/page.vue'
 import timeBox from './components/timeBox.vue'

export default {
  name: "indexPage",
  components:{
    swiper,
    swiperSlide,
    goodsListOne,
    goodsListTwo,
    tabs,
    timeBox
  },
  store:store,
  data() {
    return {
      currentCity:{
        "id": 1,
        "spell": "beijing",
        "name": "北京"
      },
      swiperOption:{
        pagination: {
          el: '.swiper-pagination'
        },
        loop:true,
        autoplay: true,
      },
      swiperOption2: {
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption3: {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop:true,
        autoplay: false,
      },
      swiperOption4: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop:true,
        autoplay: true,
      },
      swiperOption5: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        // freeMode: true,
        grabCursor: true,
        loop:true,
        autoplay: false,
      },
      swiperOption6: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        grabCursor: true,
        loop:true,
        autoplay: false,
      },
      swiperImgs:[
        {
          id:0,
          imgUrl:'/client/assets/img/indexPage/banner1-web.jpg',
          // imgUrl:'/client/assets/img/indexPage/banner1.jpg',
          // imgUrl:'/client/assets/img/icon09.png'
          // imgUrl:'https://youimg1.c-ctrip.com/target/100t0w000000kbgd0AB22_R_640_10000_Q90.jpg'
        },
        {
          id:1,
          imgUrl:'/client/assets/img/indexPage/banner2-web.jpg',
          // imgUrl:'/client/assets/img/indexPage/banner2.jpg',
        },
        {
          id:2,
          imgUrl:'/client/assets/img/indexPage/banner3-web.jpg',
          // imgUrl:'/client/assets/img/indexPage/banner3.jpg',
        },
      ],
      swiperImgs2:[
        {
          id:0,
          imgUrl:'https://youimg1.c-ctrip.com/target/100q0w000000kcoz4CCF7_R_640_10000_Q90.jpg'
        },
        {
          id:1,
          imgUrl:'/client/assets/img/jiank_meis.jpg'
        },
        {
          id:2,
          imgUrl:'/client/assets/img/indexPage/good1.jpg'
        },
      ],
      iconList:[
        {
          id:0,
          imgUrl:'/client/assets/img/icon06.png',
          desc:'常用清单',
          url:'/index'
        },
        {
          id:1,
          imgUrl:'/client/assets/img/icon07.png',
          desc:'我的订单',
          url:'/index'
        },
        {
          id:2,
          imgUrl:'/client/assets/img/icon08.png',
          desc:'红包卡券',
          url:'/redPacket'
        },
        {
          id:3,
          imgUrl:'/client/assets/img/icon09.png',
          desc:'签到有礼'
        },
        {
          id:4,
          imgUrl:'/client/assets/img/icon06.png',
          desc:'常用清单',
          url:'/index'
        },
        {
          id:5,
          imgUrl:'/client/assets/img/icon07.png',
          desc:'我的订单',
          url:'/index'
        },
        {
          id:6,
          imgUrl:'/client/assets/img/icon08.png',
          desc:'红包卡券',
          url:'/index'
        },
        {
          id:7,
          imgUrl:'/client/assets/img/indexPage/bd_tub10.png',
          desc:'全部分类',
          url:'/index'
        },
        {
          id:8,
          imgUrl:'/client/assets/img/icon06.png',
          desc:'常用清单',
          url:'/index'
        },
        {
          id:9,
          imgUrl:'/client/assets/img/icon07.png',
          desc:'我的订单',
          url:'/index'
        },
        {
          id:10,
          imgUrl:'/client/assets/img/icon08.png',
          desc:'红包卡券',
          url:'/index'
        },
        {
          id:11,
          imgUrl:'/client/assets/img/icon09.png',
          desc:'签到有礼',
          url:'/index'
        },
      ],
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
      ],
      endTime:0, //活动结束时间
      token:getStore("token"),
      cityId:249763,
      streetId:249766,
      customerAddressId:43957,
      customerRedPacketId:0,//已选红包id
      freightRedPacketId:0,//已选运费券id
      checkedIds:[1608345]
    }
  },
  computed:{
    // ...mapState({
    //   currentCity: 'city'
    // })
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods:{
    goUrl(item){
      setTimeout(()=> {
        this.$router.push(item.url)
      },200)

    },
    callback(){
      alert(1111)
    }
  },
  beforeMount() {
     this.currentCity = getStore('currentCity')? getStore('currentCity') : this.currentCity
     this.endTime = this.$store.state.servicetime

  },
  mounted(){
    console.log("this.token---",this.token)
    let url = `api/v5/goods/cookbook/9/249763/249766?token=${this.token}`
    this.$ajax.get(url).then((res) =>{
      console.log("自己封装的httpGet-----",res);
      if(res.datas){
        console.log("商品---",res.datas[0].name)
      }
    })
    // let options = {
    //   goodsId: -1,
    //   unitId: 5,
    //   num: 4
    // };
    // let url = `api/v5/shopping_cart/set/0/${this.cityId}/${this.streetId}?token=${this.token}`
    // this.$ajax.post(url,options,0,1).then((res) =>{
    //   console.log("成功的数据处理-----",res)
    // },(res) =>{
    //   console.log("失败的数据处理-----",res)
    // })
  }
}
