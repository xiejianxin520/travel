<template>
  <div>
    <div class="banner" @click="gallaryclick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">
          潮州西湖海洋公园aaaa景区 </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39</div>
      </div>
    </div>
    <gallary v-show="showgallary" @close="fucloseshow"></gallary>
  </div>
</template>

<script>
import gallary from 'common/gallary/Gallary'
export default {
  name: 'banner',
  components: {
    gallary
  },
  data() {
    return {
      showgallary: false
    }
  },
  methods: {
    gallaryclick() {
      this.showgallary = true
    },
    fucloseshow() {
      this.showgallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-tittle {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>




