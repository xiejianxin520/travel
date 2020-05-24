<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <a href="https://www.jianshu.com/p/e97bf012a01b">
        <li class="item border-bottom"
            v-for="item of list"
            :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img"
                 :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </a>

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
