<template>
  <div>
    <a class="imgList" v-for="i in navImg"><img :src="i.PictureWebp"></a>
    <a class="imgList" v-for="j in navImgs"><img :src="j.PictureWebp"></a>
  </div>
</template>

<script>

export default {
  name: 'imgList',
  props: ['navImg','navImgs'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.imgList{
  margin-top: 8px;
  display: block;
  img{
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
