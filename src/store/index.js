import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海'
  },
  actions: {
    acfun(ctx, city) {
      ctx.commit('mufun', city)
    }
  },
  mutations: {
    mufun(state, city) {
      state.city = city
    }
  }
})
