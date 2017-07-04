<template>
  <div class="homeIndex">
    <headerBar></headerBar>
    <navBar></navBar>
    <router-view></router-view>
  </div>
</template>

<script>
import headerBar from './home/component/header.vue'
import navBar from './home/component/navlist.vue'
import footerNav from '@/components/footerNav/index.vue'
export default {
  name: 'homeIndex',
  data () { 
    return {}
  },
  components: {
    headerBar,
    navBar,
    footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1{
  font-size: 16px;
}
.homeIndex{
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  margin-bottom: 45px;
}
</style>
