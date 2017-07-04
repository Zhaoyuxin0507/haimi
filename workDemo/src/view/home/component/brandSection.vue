<template>
  <div class="brand-section">
    <h2>严选品牌</h2>
    <div class="brand-img" v-if="brandSection.length!=0">
        <div class="brand-left">
          <a href="#"><img :src="brandSection.Records[0].PictureWebp"/></a>
          <a href="#"><img :src="brandSection.Records[1].PictureWebp"/></a>
        </div>
        <div class="brand-right">
          <a href="#"><img :src="brandSection.Records[2].PictureWebp"/></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brand-section',
  props: ['brandSection'],
  data () {
    return {}
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.brand-section{
  margin-top: 8px;
  background: #fff;
  h2{
    line-height: 42px;
    text-align: center;
    font-size: 13px;
    font-weight: 100;
  }
}
.brand-img{
  width: 100%;
  height: 204px;
  display: -webkit-flex;
  div{
    flex: 1;
  }
}
.brand-left{
  a{
    display: block;
    width: 100%;
    height: 102px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.brand-right a img{
  width: 100%;
  height: 204px;
}
</style>
