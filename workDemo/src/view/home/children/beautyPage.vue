<template>
    <div class="beauty-page">
      <h3>美妆</h3>
       <div class="hottest-image">
           <dl v-for="i in beautyPage.Products">
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
      beautyPage:[]
    }
  },
  mounted () {
    this.getbeauty()
  },
  methods: {
     getbeauty() {
        this.$http.get('/api/beautyData').then(function (response) {
          this.beautyPage= response.data.data[0]
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.beauty-page{
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
