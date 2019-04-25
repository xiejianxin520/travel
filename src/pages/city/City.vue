<template>
  <div>
    <cityheader></cityheader>
    <citysearch :cities="cities"></citysearch>
    <citylist :cities="cities" :hot="hotCities" :accerindex="accerindex"></citylist>
    <citycontrol :cities="cities" @fuclick="change"></citycontrol>
  </div>
</template>

<script>
import cityheader from './components/Cityheader'
import citysearch from './components/Search'
import citylist from './components/Citylist'
import citycontrol from './components/Citycontrol'
import axios from 'axios'

export default {
  name: 'city',
  components: {
    cityheader,
    citysearch,
    citylist,
    citycontrol
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      accerindex: ''
    }
  },
  mounted() {
    this.getcityinfo()
  },
  methods: {
    getcityinfo() {
      //获取城市的ajax数据'/static/mock/city.json'
      axios.get('/api/city.json').then(res => {
        console.log(res.data) //'返回数据结果为'
        const result = res.data
        if (result.ret && result.data) {
          this.cities = result.data.cities
          this.hotCities = result.data.hotCities
          console.log(this.cities) //'返回热门城市结果' +
        }
      })
    },

    change(a) {
      //接受citylist传递的当前坐标
      this.accerindex = a
      // console.log('我是父亲接受到的数据' + this.accerindex)
    }
  }
}
</script>


