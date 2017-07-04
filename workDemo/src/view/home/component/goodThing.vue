<template>
  <div class="good-things">
    <h2>推荐好物</h2>
    <div class="things-img">
      <a href="#" v-for="item in goodThing"><img :src="item.PictureWebp"/></a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'good-thing',
  props: ['goodThing'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.good-things{
  margin-top: 8px;
  background: #fff;
  h2{
    line-height: 42px;
    text-align: center;
    font-size: 13px;
    font-weight: 100;
  }
}
.things-img{
  width: 100%;
  display: -webkit-flex;
  flex-wrap: wrap;
  a{
    display: block;
    width: 50%;
    height: 100%;
    line-height: 0;
    img{
      width: 100%;
    }
  }
}
</style>
