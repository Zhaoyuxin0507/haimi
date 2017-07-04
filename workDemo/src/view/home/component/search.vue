<template>
  <div class="baby">
    <div class="search">
      <div class="text">
        <span class="fl ico"></span>
        <input class="fl f12 c_fff" placeholder="搜索宝贝" type="text">
      </div>
      <div class="submit">搜索</div>
    </div>
    <h3>搜索宝贝</h3>
    <ul v-for="item in main" class="uls">
      <li>{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"search",
  data () {
    return {
      main:[
        {text:"旅行"},
        {text:"人字拖"},
        {text:"零食"},
        {text:"瘦身"},
        {text:"DW手表"},
        {text:"防晒"},
        {text:"美白丸"},
        {text:"洗发"},
        {text:"榨汁机"},
        {text:"吹风机"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.baby{
  .search{
    height: 44px;
    background: #fff;
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
        padding-left: 5px;
        display:block;
        position:absolute;
        background: #eee;
        top:0;
        width:100%;
        left:0;
      }
    }
    .submit{
      display: block;
      width: 40px;
      color:#000;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .uls{
    float: left;
    li{
      margin-left: 20px;
      margin-top: 5px;
      text-align: center;
      line-height: 25px;
      border: 1px solid #eee;
      padding: 0 5px 0 5px;
    }
  }

}
</style>
