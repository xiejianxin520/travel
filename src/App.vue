<template>
  <div id="app">
    <!-- 从页面内存加载路由界面，无需再渲染 -->
    <keep-alive>
      <router-view />
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

