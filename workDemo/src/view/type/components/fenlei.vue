<template>
	<div class="head-lei">
      <div class="hottest-image" >
       <dl v-for="i in headLei">
         <dt v-if='i.Records.length == 1'><img :src=i.Records[0].PictureWebp /></dt>
         <dd v-else>
            <span v-for='item in i.Records'>{{item.SlideName}}</span>
         </dd>
       </dl>
    </div>
	</div>
</template>

<script>
export default {
  name: 'headLei',
  data () {
    return {
    	headLei:[]
    }
  },
  mounted () {
    this.getfenlei()
  },
  methods: {
     getfenlei() {
        this.$http.get('/api/fenleiData').then(function (response) {
          this.headLei= response.body.data
      })
    }

  }
}
</script>
<style scoped lang="less">
.hottest-image{
  dt{
    line-height: 0;
    img{
      width:100%;
      height: auto;
    }
  }
  dd{
    padding: 0 10px 10px 0px;
    display: -webkit-flex;
    flex-wrap:wrap;
    span{
      display: block;
      padding-left: 8px;
      padding-right: 8px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #eee;
      margin-top: 10px;
      margin-left: 10px;
    }
  }
}
</style>
