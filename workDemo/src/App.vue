<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="less">
@import './static/css/reset.css';
@import './static/css/iconfont.css';
body{
  width: 100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
