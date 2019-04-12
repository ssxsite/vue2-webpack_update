import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'

Vue.use(Vuex)

const state = {// 改变状态值 固定state
  city:{
    "id": 1,
    "spell": "beijing",
    "name": "北京"
  },
  servicetime:'2018-11-18',//服务器时间，
  updateCart:0,//购物车数量是否更新
}

const mutations = {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}

export default new Vuex.Store({
  state,
  mutations
})
