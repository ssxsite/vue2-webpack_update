import Vue from 'vue'
import Router from 'vue-router'
import homerouter from './home'
  Vue.use(Router)

// const router = new Router({
//   routes: [
//     ...homerouter
//   ]
// })

// export default router

export default () => {
  return  new Router({
    routes: [
      ...homerouter
    ],
     // mode:'history',
    scrollBehavior(to,from,savePosition){
     if(savePosition){
       return savePosition
     }else {
        return {x:0,y:0}
     }
    }
    })
}
