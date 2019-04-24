<template>
  <div class='icons'>
    <swiper :options="swiperOption">
      <!-- <!分页> -->
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class='icon' v-for="item in page" :key="item.id">
          <div class='icon-img-div'>
            <img class='icon-img-content' :src="item.imgUrl" alt="">
          </div>
          <p class="icon-p">{{item.dec}}</p>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        var page = Math.floor(index / 8) //用来分页，也是把数组分成几个索引就是几页
        if (!pages[page]) {
          //如果数组不存在这个pages[page]，那就要给他空数组赋值给他
          pages[page] = []
        }
        pages[page].push(item) //现在数组存在这个pages[page]，就可以往里面添加对象。。。这个不能用else，不然pages[page]==1时候没有添加给数组。因为都是一起执行的
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/overmin.styl';

.icons >>> .swiper-container {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    position: relative;
    float: left;
    overflow: hidden;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img-div {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-p {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      overminfun();
    }
  }
}
</style>
