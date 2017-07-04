<template>
  <div class="search-bar">
    <div class="text">
      <span class="fl ico"></span>
      <input class="fl f12 c_fff" placeholder="搜索宝贝" type="text">
    </div>
    <router-link to="/search">
      <div class="submit">搜索</div>
    </router-link> 
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-bar{
  height: 44px;
  background: #242424;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
  display:-webkit-box;
  box-sizing:border-box;
  .text{
    -webkit-box-flex:1;
    background: #1a1a1a;
    line-height: 44px;
    position:relative;
    input{
      border: none;
      height: 25px;
      padding-left: 2px;
      display:block;
      position:absolute;
      background: #1a1a1a;
      top:0;
      width:100%;
      left:0;
      color:#fff;
    }
  }
  .submit{
    display: block;
    width: 40px;
    text-align: center;
    color:#fff;
    font-size: 12px;
    margin-top: 5px;
  }
}
</style>
