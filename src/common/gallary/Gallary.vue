<template>
  <div class="container" @click="sonclosegallary">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item.imgurl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    imgs: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            imgurl:
              'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg'
          },
          {
            id: 2,
            imgurl:
              'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
          }
        ]
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        autoplay: false,
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    sonclosegallary() {
      this.$emit('close') //子组件点击触法父组件的方法，从而调用v-show属性
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: visible;
  // 因为滚动自带overflow：hidden效果，
  // 所以要设置失效，才能让滚动分式显示出来
}

.container {
  display: flex;
  // flex-direction: column;
  // 水平垂直居中
  align-items: center;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
 