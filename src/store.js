import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// let defaultCity = '北京'
// try {
//   //判断浏览器是否支持
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}

export default new Vuex.Store({
  state: {
    // 初始化状态
    city: '北京'
  },
  actions: {
    acfun(ctx, city) {
      ctx.commit('mufun', city)
    }
  },
  mutations: {
    mufun(state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})