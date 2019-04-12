import {getStore} from '../../../service/localStorageUtil.js'


export default {
  name: "page",
  data() {
    return {
      hasHeader:false,
      hasBottom:false,
      defaultCity:{
        "id": 1,
        "spell": "beijing",
        "name": "北京"
      },
      currentCity:{},
      temp:JSON.parse(getStore('currentCity')),
      show:false,
      liDatas:[
        {
          id:1,
          val:'首页',
          url:'/'
        },
        {
          id:2,
          val:'商品分类',
          url:'/'
        },
        {
          id:3,
          val:'扫一扫',
          url:'/'
        },
        {
          id:4,
          val:'购物车',
          url:'/'
        },
        {
          id:5,
          val:'我的商城',
          url:'/'
        }
      ],
      tabDatas:[
        {
          val: '首页',
          icon: '/client/assets/img/indexPage/d2.png',
          activeIcon:'/client/assets/img/indexPage/d2-2.png',
          url: '/index',
          hasNum:false
        },
        {
          val: '分类',
          icon: '/client/assets/img/indexPage/d1.png',
          activeIcon:'/client/assets/img/indexPage/d1-1.png',
          url: '/sort',
          hasNum:false
        },
        {
          val: '购物车',
          icon: '/client/assets/img/indexPage/d3.png',
          activeIcon:'/client/assets/img/indexPage/d3-3.png',
          url: '/person/cart',
          hasNum:true
        },
        {
          val: '我的',
          icon: '/client/assets/img/indexPage/d4.png',
          activeIcon:'/client/assets/img/indexPage/d4-4.png',
          url: '/person',
          hasNum:false
        },
      ],
      tabIndex:0,
      navIndex:0,
      navData:[]
    }
  },
  methods:{
    goUrl(item, index) {
      this.$router.replace(item.url);//其中login是你定义的一个路由模块；
      this.navIndex = index;
    },
  },
  mounted() {
    this.navData =  [
      {
        val: '首页',
        url: '/index'
      },
      {
        val: 'popupPage',
        url: '/headerPage'
      },
      {
        val: '订单',
        url: '/order'
      },
      {
        val: '常用样式组件',
        url: '/componentsPage'
      },
      {
        val: '测试页面',
        url: '/test'
      },
    ]
    this.navIndex = 0
    this.hasHeader = this.$router.currentRoute.meta.hasHeader ? true : false
    this.hasBottom = this.$router.currentRoute.meta.hasBottom ? true : false
    this.currentCity = this.temp ? this.temp: this.defaultCity;
  },
  watch:{
    $route(to,from){
      console.log(to)
      this.hasHeader = to.meta.hasHeader ? true : false
      this.hasBottom = to.meta.hasBottom ? true : false
      switch(to.path)
      {
        case  '/index':
          this.tabIndex = 0
          break;
        case  '/sort':
          this.tabIndex = 1
          break;
        case  '/person/cart':
          this.tabIndex = 2
          break;
        case  '/person':
          this.tabIndex = 3
          break;
        default:
          break;
      }

    },
    temp(){
      this.currentCity = temp ? temp:this.defaultCity
    }
  }

}
