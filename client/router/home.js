import todoPage from '../views/todoPage.vue'
import headerPage from '../views/headerPage/headerPage.vue'
import componentsPage from '../views/componentsPage/page.vue'
import indexPage from '../views/indexPage/indexPage.vue'
import sortPage from '../views/indexPage/sortPage/sort.vue'
import cityPage from '../views/cityPage/cityPage.vue'
import tabs from '../common/components/pages-commponents/page.vue'
import orderPage from '../views/orderPage/order.vue'
import addressPage from '../views/orderPage/addressPage/address.vue'
import addAddressPage from '../views/orderPage/addressPage/addAddress/add.vue'
import expressPage from '../views/orderPage/expressPage/express.vue'
import LRPages from '../views/LRPages/page.vue'
import loginPage from '../views/LRPages/loginPage/login.vue'
import registerPage from '../views/LRPages/registerPage/register.vue'
import personPage from '../views/personPage/person.vue'
import personOrderPage from '../views/personPage/order/order.vue'
import personOrderDetailPage from '../views/personPage/order/detail/detail.vue'
import personRatePage from '../views/personPage/rate/rate.vue'
import personJiFenPage from '../views/personPage/jifen/jifen.vue'
import personColletionPage from '../views/personPage/collection/collection.vue'
import personCartPage from '../views/personPage/cart/cart.vue'
import personUserInfoPage from '../views/personPage/userInfo/userInfo.vue'
import personUserInfoNicPage from '../views/personPage/userInfo/nicheng/nicheng.vue'
import personUserInfoXingBiePage from '../views/personPage/userInfo/xingbie/xingbie.vue'
import testPage from '../views/testPage/test.vue'
import redPacketPage from '../views/personPage/red-packet/redPacket.vue'
import notFoundComponent from '../common/components/notFoundComponent/notFoundComponent.vue'
export default [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/',
    component: tabs,
    meta: {
      keepAlive: false  // 通过此字段判断是否需要缓存当前组件
    },
    children:[
      {
        path: 'index',
        name: 'home',
        component: indexPage,
        meta: {
          hasHeader: true,
          hasBottom: true
        }
      },
      {
        path: 'headerPage',
        name:'headerPage',
        component:headerPage,
        meta: {
          hasHeader: true,
          hasBottom: true
        }
      },
      {
        path: 'sort',
        name: 'sort',
        component: sortPage,
        meta: {
          hasHeader: true,
          hasBottom: false
        }
      }
    ]
  },
  {
    path: '/order',
    name:'orderPage',
    component:orderPage
  },
  {
    path: '/todo',
    name:'todo',
    component:todoPage
  },
  {
    path: '/componentsPage',
    name:'componentsPage',
    component:componentsPage
  },
  {
    path: '/city',
    name:'cityPage',
    component:cityPage
  },

  {
    path: '/address',
    name:'address',
    component:addressPage
  },
  {
    path: '/add-address',
    name:'addAddress',
    component:addAddressPage
  },
  {
    path: '/express',
    name:'express',
    component:expressPage
  },
  {
    path: '/LRPages',
    name:'LRPages',
    component:LRPages
  },
  {
    path: '/login',
    name:'login',
    component:loginPage
  },
  {
    path: '/register',
    name:'register',
    component:registerPage
  },
  {
    path: '/person',
    name:'person',
    component:personPage
  },
  {
    path: '/person/order',
    name:'/person-order',
    component:personOrderPage
  },
  {
    path: '/person/order/detail',
    name:'person-order-detail',
    component:personOrderDetailPage
  },
  {
    path: '/person/rate',
    name:'person-rate',
    component:personRatePage
  },
  {
    path: '/person/jifen',
    name:'person-jifen',
    component:personJiFenPage
  },
  {
    path: '/person/colletion',
    name:'person-colletion',
    component:personColletionPage
  },
  {
    path: '/person/cart',
    name:'person-cart',
    component:personCartPage
  },
  {
    path: '/person/userInfo',
    name:'person-userInfo',
    component:personUserInfoPage
  },
  {
    path: '/person/userInfo/nicheng',
    name:'person-userInfo-nicheng',
    component:personUserInfoNicPage
  },
  {
    path: '/person/userInfo/xingbie',
    name:'person-userInfo-xingbie',
    component:personUserInfoXingBiePage
  },
  {
    path: '/test',
    name:'test',
    component:testPage
  },
  {
    path: '/redPacket',
    name:'redPacket',
    component:redPacketPage
  }
]
