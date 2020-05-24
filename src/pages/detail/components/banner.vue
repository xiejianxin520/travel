<template>
  <div>
    <div class="banner"
         @click="gallaryclick">
      <!-- 这里的src要改为绑定的:src 不然简单src='bannerImg'是没有意义的，他不会去解析-->
      <img class="banner-img"
           :src='bannerImg' />
      <div class="banner-info">
        <div class="banner-tittle">
          {{this.sightName}} </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}} </div>
      </div>
    </div>
    <fade-animation>
      <gallary v-show="showgallary"
               @close="fucloseshow"
               :imgs='gallaryImgs'>
      </gallary>
    </fade-animation>
  </div>
</template>

<script>
import gallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/animation/FadeAnimation'
export default {
  name: 'banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    gallary,
    FadeAnimation
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




