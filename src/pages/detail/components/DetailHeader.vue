<template>
  <div>
    <router-link to="/" tag='div' class="backicon" v-show="showabs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <router-link to='/' tag='div' class="header-fixed" v-show="!showabs" :style="opacityStyle">
      <div class="iconfont header-fixed-back">&#xe624;</div>
      景点详情
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showabs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      console.log('滚动触法')
      const top = document.documentElement.scrollTop
      // console.log(top)
      if (top > 60) {
        let curryopacity = top / 140
        curryopacity = curryopacity > 1 ? 1 : curryopacity
        this.opacityStyle = {
          opacity: curryopacity
        }
        this.showabs = false //显示
      } else {
        this.showabs = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.backicon {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: yellowgreen;
  font-size: 0.32rem;
  height: $headerHeight;
  line-height: $headerHeight;

  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>



