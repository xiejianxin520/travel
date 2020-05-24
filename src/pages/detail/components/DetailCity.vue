<template>
  <div>
    <div v-for="(item,index) in banlist"
         :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>

      <!-- 里面包含自己，递归组件 ，想当与生成跟一样在自子组件里面-->
      <!-- 传递的数组也是绑定的。banlist要一样，因为都是循环banlist-->
      <div v-if="item.children"
           class="item-chilren">
        <detail-city :banlist='item.children'></detail-city>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCity',
  props: {
    banlist: Array
  }
}
</script>

<style lang="stylus" scoped>
.item-title-icon {
  position: relative;
  left: 0.06rem;
  top: 0.06rem;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png');
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}

.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.item-chilren {
  padding: 0 0.2rem;
}
</style>


list: [
        {
          title: '成人票',
          children: [
            {
              title: '特惠双人票'
            },
            {
              title: '三人票',
              children: [
                {
                  title: '包午餐三人票'
                }
              ]
            }
          ]
        },
        {
          title: '学生票',
          children: [
            {
              title: '学生票七日游'
            }
          ]
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]

