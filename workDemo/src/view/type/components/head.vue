<template>
	<div class="head-fen">
		<ul>
			<router-link v-for="item in navList" :to="item.link">
        <li>{{item.text}}</li>
      </router-link>
		</ul>
    <router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'headFen',
  data () {
    return {
    	headFen:[],
      navList: [
        {
          text: '分类',
          link:'/typePage/headLei'
        },
        {
          text: '品牌',
          link:'/typePage/headPin'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.head-fen{
	ul{
    height: 35px;
    line-height: 35px;
    margin-left: 35%;
		li{
      float: left;
			width: 25%;
			text-align: center;
		}
	}
}
</style>
