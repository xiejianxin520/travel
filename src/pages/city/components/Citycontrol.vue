<template>
  <ul class="list">
    <li class="item"
        v-for="item of keyslist"
        :key='item'
        :ref='item'
        @touchstart.prevent="handlestart"
        @touchmove="handlemove"
        @touchend="handleend"
        @click="listclick">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'citycontrol',
  props: {
    cities: Object
  },
  computed: {
    keyslist() {
      let keyslist = []
      for (let keyi in this.cities) {
        keyslist.push(keyi)
      }
      return keyslist //[A,B,C,D...]
    }
  },
  data() {
    return {
      touchstatus: false,
      aHeight: 0,
      timer: null
    }
  },
  updated() {
    this.aHeight = this.$refs['A'][0].offsetTop //开头字母A的高度
  },
  methods: {
    listclick(e) {
      var curitem = e.target.innerText //当前被点击的
      //传递给父元素
      // console.log(e.target.innerText)
      this.$emit('fuclick', curitem)
    },
    handlestart(e) {
      this.touchstatus = true
    },
    handlemove(e) {
      // console.log('sk', e.targetTouches[0]);
      if (this.touchstatus) {
        //当前第几个字母   = （触摸处浏览器页面的垂直坐标  -  A 字母距离搜索栏底部的距离） / 每个字母的高度
        // 思路1. this.$emit('fuclick', 'D') //用这个传统给父组件再传给列表组件中的跳转监听
        //2.D这个可以通过数组的索引来拿，所以可以把原先的cities里面的key转化为数组（for in）
        //3.D所在数组已经知道，然后来求当前D的所在索引，
        //4.可以通过当前列表高度除以字母高度，得到索引长就是索引值，就是目前触到的当前索引
        //当前列表高度 = 当前总高度 -第一个A距离额头的高度
        //当前总高度是用e.touches[0].clientY - 头部高度（85）
        //第一个A距离额头的高度,是用domA的高度
        //所以要用到$refs，所以循环中要绑定ref
        // let aHeight = this.$refs['A'][0].offsetTop //开头字母A的高度
        //  console.log(aHeight)
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          //  
          // this.aHeight = this.$refs['A'][0].offsetTop //开头字母A的高度
          //// 68为：顶部搜索栏 的高度
          let keytolHeight = e.targetTouches[0].clientY - 68 //当前点击字母的高度
          console.log(keytolHeight)
          let keyindex = Math.floor((keytolHeight - this.aHeight) / 20) //当前字母列表数组的索引
          console.log(keyindex)
          if (keyindex >= 0 && keyindex < this.keyslist.length) {
            let acrkey = this.keyslist[keyindex] //当前字母
            this.$emit('fuclick', acrkey) //传统给子组件跳转
          }
        }, 16)
      }
    },
    handleend($emit) {
      this.touchstatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
// 优化第一步，让固定的A的值是固定，但每次触摸都会执行，把他提出来，坐在updata时候，就获取一步
// 优化第二步，防抖，对滚动进行节流(延时函数)



// 两个组件联动，一个是字母列表，。一个是城市列表，触碰到哪个字母同时相对应地变化的两个字母
//利用兄弟组件通讯和better scroll的插件，当前字母的dom去滚动
//利用touchmove的e.targetTouches[0].clientY可以获取当前元素距离窗口总高度
// 然后用当前元素字母在字母列表长度 = 元素离窗口总长度- 首字母A的距离窗口的高度
//当前字母列表长度 除以 每个字母的长度，再Math.floor向下取整获取到了""这个字母的索引"
//keyindex >= 0 && keyindex < this.keyslist.length为了别一开始碰到a的时候会产生错误