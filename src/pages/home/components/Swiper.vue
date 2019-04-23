<template>
  <div class="wrapper" v-if="showswiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in list " :key='item.id'>
        <img class="swiper-img" :src='item.imgUrl' alt="">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', //有小圆点
        loop: true, //可循环
        autoplay: {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 3000 //自自动循环时间
        }, //可选选项，自动滑动
        speed: 2000 //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        // mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
        // grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
      }
    }
  },
  computed: {
    showswiper() {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  border-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>