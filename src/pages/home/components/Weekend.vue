<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper"><a href="http://touch.piao.qunar.com/touch/toSku.htm?skuId=104&skuName=%E5%B9%BF%E5%B7%9E%E5%BF%85%E6%89%93%E5%8D%A1&cat=from_area%3Dts_sku%26from_index%3D2%26from_value%3D%25E5%25B9%25BF%25E5%25B7%259E%25E5%25BF%2585%25E6%2589%2593%25E5%258D%25A1%26dist_city%3D%25E5%25B9%25BF%25E5%25B7%259E"><img class="item-img" :src="item.imgUrl" /></a>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/overmin.styl';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    overminfun();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    overminfun();
  }
}
</style>
