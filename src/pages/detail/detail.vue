<template>
  <div>
    <banner :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></banner>
    <detail-header></detail-header>
    <div class="strend">
      <detail-city :banlist='list'></detail-city>
    </div>
  </div>
</template>

<script>
import banner from './components/banner'
import DetailHeader from './components/DetailHeader'
import DetailCity from './components/DetailCity'
import axios from 'axios'
export default {
  name: 'detail',
  components: {
    banner,
    DetailHeader,
    DetailCity
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
      // list: [
      //   {
      //     title: '成人票',
      //     children: [
      //       {
      //         title: '成人五人票'
      //       },
      //       {
      //         title: '成人特惠超级十人票'
      //       }
      //     ]
      //   },
      //   {
      //     title: '儿童票'
      //   },
      //   {
      //     title: '学生票'
      //   }
      // ]
    }
  },
  methods: {
    getDetailInfo() {
      //想等于'/api/index.json?id='+this.route.prams
      axios
        .get('/detail', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(res => {
          // console.log(res.data)
          var reludata = res.data
          if (reludata.ret && reludata.data) {
            console.log(reludata.data)
            this.sightName = reludata.data.sightName
            this.bannerImg = reludata.data.bannerImg
            this.list = reludata.data.categoryList
            this.gallaryImgs = reludata.data.gallaryImgs
          }
        })
    }
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
.strend {
  height: 800px;
}
</style>



