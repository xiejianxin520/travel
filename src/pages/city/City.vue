<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
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
import Axios from 'axios'

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
      //获取城市的ajax数据
      axios.get('/city').then(res => {
        console.log(res.data)
        const result = res.data
        if (result.ret && result.data) {
          this.cities = result.data.cities
          this.hotCities = result.data.hotCities
          console.log(this.cities)
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


