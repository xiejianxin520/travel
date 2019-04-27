<template>
  <div>
    <banner></banner>
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
export default {
  name: 'detail',
  components: {
    banner,
    DetailHeader,
    DetailCity
  },
  data() {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人五人票'
            },
            {
              title: '成人特惠超级十人票'
            }
          ]
        },
        {
          title: '儿童票'
        },
        {
          title: '学生票'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.strend {
  height: 800px;
}
</style>



