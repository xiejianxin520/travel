import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/Home'
import city from '@/pages/city/City'
import detail from "@/pages/detail/detail"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/detail/:id',
      name: "detail",
      component: detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    //表示在用户切换路由时让是所有页面都返回到顶部位置
    //如果返回savedPosition,那么在点击后退按钮时就会表现的像原生浏览器一样，返回的页面会滚动过到之前按钮点击跳转的位置，大概写法如下：
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
    //如果想要模拟滚动到锚点的行为:
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})