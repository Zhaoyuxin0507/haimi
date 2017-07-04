<template>
	<div class="shop-pp">
		<div class="empty">
      <p>购物车居然是空的</p>  
      <router-link to="/homeIndex">
        <button>去首页逛逛</button>
      </router-link>
    </div>
    <div class="baobei">
      <dl v-for="i in data">
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
  name: 'shopPp',
  data () {
    return {
    	data:[]
    }
  },
  mounted () {
    this.getshop()
  },
  methods: {
     getshop() {
        this.$http.get('/api/shopData').then(function (response) {
        this.data = response.body.extra.Suggest
      })
    }
  }
}
</script>
<style scoped lang="less">
.empty{
  width: 100%;
  height: 250px;
  background: #eee;
  p{
    padding-top: 125px;
    margin-bottom: 10px;
  }
}
.baobei{
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
</style>
