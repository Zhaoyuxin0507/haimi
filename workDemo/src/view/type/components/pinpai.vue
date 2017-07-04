<template>
	<div class="head-pin">
      <dl v-for="i in headPin">
        <dt><img :src="i.PictureWebp"/></dt>
        <dd>
           <h3>{{i.SlideName}}</h3>
           <p>{{i.Description}}</p>
        </dd>
      </dl>
	</div>
</template>

<script>
export default {
  name: 'headPin',
  data () {
    return {
    	headPin:[]
    }
  },
  mounted () {
    this.getpinpai()
  },
  methods: {
     getpinpai() {
        this.$http.get('/api/pinpaiData').then(function (response) {
          var data = response.data.data
          this.headPin=data[0].Records
      })
    }

  }
}
</script>
<style scoped lang="less">
.head-pin{
  display: -webkit-flex;
   flex-wrap:wrap;
   padding-bottom: 50px;
  dl{
    width: 33.3%; 
    dt img{
      width: 106px;
      height: 106px;
     }
     dd{
      p{
        line-height: 25px;
        text-overflow:ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #999;
      }
     }
  }
}
</style>
