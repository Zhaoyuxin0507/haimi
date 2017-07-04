<template>
   <div class="footer">
    <router-link v-for="item in navList" :to="item.link">
       <p>{{item.text}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          text: '首页',
          link:'/homeIndex'
        },
        {
          text: '分类',
          link:'/typePage'
        },
        {
          text: '购物车',
          link:'/shopPp'
        },
        {
          text: '我的',
          link:'/mySelf'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.footer{
  background: #fff;
  font-size:14px;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  height:40px;
  line-height: 40px;
  border-top:1px solid #ccc;
  display:-webkit-flex;
  justify-content: space-around;
  border-top:1px solid #999;
}
p{
  color:#666;
  text-align:center;
  font-size: 13px;
}
</style>
