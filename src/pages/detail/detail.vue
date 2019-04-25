<template>
  <div>
    <banner></banner>
    <detail-header></detail-header>
    <div class="strend"></div>
  </div>
</template>

<script>
import banner from './components/banner'
import DetailHeader from './components/DetailHeader'
export default {
  name: 'detail',
  components: {
    banner,
    DetailHeader
  }
}
</script>
<style lang="stylus" scoped>
.strend {
  height: 800px;
}
</style>



