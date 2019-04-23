<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommed :list="recommendList"></home-recommed>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommed from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommed,
    HomeWeekend
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastcity: ''
    }
  },
  computed: {
    ...mapState(['city']) //这个city是vuex中的，是跟其他组件变化而变化
  },
  methods: {
    getHomeInfo() {
      //把当前其他组件练习的city传给get请求
      axios.get('/static/mock/index.json?city=' + this.city).then(res => {
        //要用箭头函数，不然axios中this是不存在的
        // console.log(res.data.data)
        const reluct = res.data
        if (reluct.ret && reluct.data) {
          this.iconList = reluct.data.iconList
          this.swiperList = reluct.data.swiperList
          this.recommendList = reluct.data.recommendList
          this.weekendList = reluct.data.weekendList
        }
      })
    }
  },
  mounted() {
    console.log('设置了keepliev我就不会一直渲染了')
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    //页面重新加载执行
    if (this.lastCity !== this.city) {
      //如果上次城市跟这次城市不一样，就要重新获取AJAX数据
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>


