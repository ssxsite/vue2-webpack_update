const state = {
  city:{
    "id": 1,
    "spell": "beijing",
    "name": "北京"
  },
  servicetime:'2019-11-18',//服务器时间
}

try {
  if (localStorage.city) {
    state.city = localStorage.city
  }
} catch (e) {}

export default {
  state
}
