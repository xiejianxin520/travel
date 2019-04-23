<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              <!-- {{this.$store.state.city}} -->
              {{this.currycity}}
            </div>
          </div>
        </div>
      </div>
      <!-- //热门城市部分 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id">
            <div class="button" @click="cityToStore(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 
      所有城市循环对象用key -->
      <div class="area" v-for="(items, key) in cities" :key="key" :ref='key'>
        <!-- 这里ref绑定属性形式绑定key 会以相对应key的去循环dom -->
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="inneritem in items" :key="inneritem.id">
          <div class="item" @click="cityToStore(inneritem.name)"> {{inneritem.name}}</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'cityList',
  props: {
    hot: Array,
    cities: Object,
    accerindex: String
  },
  computed: {
    ...mapState({ currycity: 'city' })
  },
  methods: {
    cityToStore(city) {
      this.mufun(city) //这个mu是直接mutations的方法
      this.$router.push('/')
    },
    ...mapMutations(['mufun'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper) //滚动
  },
  watch: {
    accerindex(accerindex) {
      if (this.accerindex) {
        //如果有这个字符串的值才可以进行
        // console.log(this.accerindex)
        // console.log(this.$refs[accerindex])
        //返回数组，这里accerindex是字符串，也是循环的key也正是,A,B
        let citydom = this.$refs[accerindex][0]
        // console.log(citydom)
        this.scroll.scrollToElement(citydom)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.7rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>