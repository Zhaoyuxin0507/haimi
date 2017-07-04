<template>
    <div class="home-page">
      <img src="//img.haimi.com/FsGUYUCWZvDNBZHBEKSfUsDgVKQ2" alt="">
      <h3>居家</h3>
       <div class="hottest-image">
           <dl v-for="i in homePage">
             <dt><img :src="i.PicturesWebp"/></dt>
             <dd>
               <h3>{{i.Subject}}</h3>
               <p>{{i.FinalPrice}}</p>
             </dd>
           </dl>
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeIndex',
  data () { 
    return {
      homePage:[]
    }
  },
  mounted () {
    this.gethome()
  },
  methods: {
     gethome() {
        this.$http.get('/api/homeData').then(function (response) {
          this.homePage= response.data.data[0].Products
          //console.log(this.homePage) 
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home-page{
  img{
    width: 100%;
    height: auto;
  }
  h3{
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
  .hottest-image{
  width: 100%;
  display:-webkit-flex;
  padding-bottom: 6px;
  box-sizing: border-box;
  flex-wrap:wrap;
  text-align: center;
  dl{
    width: 50%;
    dt img{
      width: 156px;
      height: 156px;
    }
    dd{
      padding-left: 10px;
      bix-sizing: border-box;
      h3{
        font-size: 12px;
        font-weight: 100;
        width: 90%;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
        font-size: 10px;
        color: #ccc;
      }
    }
  }
}
}
</style>
