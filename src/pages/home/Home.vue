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
      weekendList: []
    }
  },
  methods: {
    getHomeInfo() {
      axios.get('/home').then(res => {
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
    this.getHomeInfo()
  }
}
</script>


