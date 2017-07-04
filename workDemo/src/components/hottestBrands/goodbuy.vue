<template>
  <div class="good-buy">
    <div class="hottest-title">
      <h2>{{goodBuy.Title}}</h2>
    </div>
    <div class="hottest-image">
      <router-link v-for="i in goodBuy.Products"
       :to="{name:'details',params:{ProductID:i.ProductID} }">

        <dl>
          <dt><img :src="i.PicturesWebp"/></dt>
          <dd>
            <h3>{{i.Subject}}</h3>
            <p>{{i.FinalPrice}}</p>
          </dd>
        </dl>
      </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'good-buy',
  props: ['goodBuy'],
  data () {
    return {}   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.good-buy{
  margin-top: 8px;
  background: #fff;
  .hottest-title{
    height: 54px;
    text-align: center;
    padding-top: 12px;
    box-sizing: border-box;
    h2{
      font-size: 14px;
    }
  }
}
.hottest-image{
  width: 100%;
  display:-webkit-flex;
  padding-bottom: 6px;
  box-sizing: border-box;
  flex-wrap:wrap;
  text-align: center;
  a{
    width: 50%;
    color: #000;
}
  dl {
    width: 90%;
    dt img{
      width: 156px;
      height: 156px;
    }
    dd{
      padding-left: 10px;
      bix-sizing: border-box;
      text-align: center;
      h3{
        font-size: 12px;
        font-weight: 100;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
        font-size: 10px;
        color: #ccc;
        text-align: center;
      }
    }
  }
}

</style>
