<template>
  <div>
    <div class="search">
      <input type="text" v-model='keyword' class="search-input" name="" id="" placeholder="输入城市名或拼音">
    </div>
    <!-- 搜索后显示的内容 -->
    <div class="search-content" ref="searchcontent" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in keyslist" :key="item.id" @click="cityToStore(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="havenodata">没有找到匹配数据</li>
      </ul>
    </div>
  </div>

</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'citysearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      keyslist: [],
      timer: null
    }
  },
  methods: {
    cityToStore(city) {
      this.$store.dispatch('acfun', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let lists = [] //定义数组来优化，不然如果下面两个循环push this.keyslist，很繁忙
        for (let key in this.cities) {
          //cites:{'A':[{"id": 56,	"spell": "aba","name": "阿坝"}，{id:2,name:啊亚}]，'B':[{id:1,name:啊尔}，{id:2,name:啊亚}}
          this.cities[key].forEach(value => {
            if (
              //跟搜索的关键字有关了
              value['spell'].indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              lists.push(value)
            }
          })
        }
        this.keyslist = lists
      }, 200)
    }
  },
  computed: {
    havenodata() {
      return !this.keyslist.length //如果数组有长度就数据，所以就别显示'无可显示'，
      //有数据就为true ,相反就为false,就不显示
      //无数据就为false ,相反就为true,就不显示
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.searchcontent) //滚动插件，要加入要滚动DOM插件
  }
}
</script>
<style lang='stylus' scoped>
@import '../../../assets/styles/varibles.styl';

.search {
  margin: 0;
  height: 0.72rem;
  padding: 0.1rem;
  background-color: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0.1rem 0.8rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.6rem;
    font-size: 0.3rem;
    color: #666;
  }
}

.search-content {
  overflow: hidden;
  z-index: 1;
  position: absolute;
  top: 1.7rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: greenyellow;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    // background: #fff;
    color: black;
  }
}
</style>