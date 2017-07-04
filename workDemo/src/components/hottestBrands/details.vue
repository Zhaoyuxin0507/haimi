<template>
  <div class="wrapper">
    <div class="popup" v-show='show1'>
      <div class="white">
        <div class="img">
          <img src="data.PicturesWebp">
          <div>
            <p class="red">￥{{data.FinalPrice}}</p>
            <p>(库存{{data.Stock}})</p>
            <p>请选择:品牌类型</p>
          </div>
        </div>
        <ul class="uls" v-for="i in data.AttrInfoArray">
          <h3>{{i.AttrName}}</h3>
          <li v-for="item in newdata">{{item}}</li>
        </ul>
        <div class="num">
          <span>购买数量</span>
          <div class="inp">
            <button class="cls">-</button>
            <input type="text" value="0">
            <button class="add">+</button>
          </div>
        </div>
        <div class="submit" @click="clear">确定</div>
      </div>
    </div>
        <swiperSlide :swiper-slide='swiperSlide'></swiperSlide>
        <p>{{data.Subject}}</p>
        <div class="float">
          <p>${{data.FinalAmount}}</p>
          <p>月销量{{data.MonthSalesNum}}件</p>
        </div>
        <div class="promises">
          <p v-for='x in data.Promises'>{{x}}</p>
        </div>        
        <div v-html='data.Descriptioin' class="content">
           <p>{{data.Descriptioin}}</p>
        </div>
         <h3 class='commodity'>{{commodity}}</h3>
        <div class="Recommend">
          <dl v-for='i in data.Recommend'>
            <dt><img :src="i.PicturesWebp" alt=""></dt>
            <dd>
              <p>{{i.Subject}}</p>
              <p>{{i.FinalPrice}}</p>
            </dd>
          </dl>
        </div>

        <footer class="footer">
         <router-link to="/homeIndex">
           <div><i class="iconfont icon-shouye-xianxing"></i></div>
         </router-link>
          <div><i class="iconfont icon-shoucang-xianxing"></i></div>
          <div><i class="iconfont icon-xihuan-xianxing"></i></div>
          <div>
            <span class="f14" _v-d5a1bc7a="" @click='shopcar'>加入购物车</span>
          </div>    
          <div>
            <span class="f14" _v-d5a1bc7a="">立即购买</span>
          </div>
        </footer> 
  </div>
</template>

<script>
import swiperSlide from '@/components/swiper'
export default {
  name: 'details',
  data () {
    return {
      swiperSlide:[],
      data:[],
      newdata:[],
      commodity:'商品推荐',
      show1:false
    }
  },
  components:{
    swiperSlide
  },
  created () {
    this.fn()
  },
  methods:{
    fn () {
      this.$http.jsonp('http://m.haimi.com/api/product/detail-cdn?ProductID='+this.$route.params.ProductID+'&platform=WAP',
      {
        jsonp:'_callback'
      }
      ).then(function(res){
      this.data = res.data.data;
      this.swiperSlide = JSON.parse(this.data.ProductPictures);
      this.newdata=this.data.AttrInfoArray[0].AttrValues.split(",")
      })
    },
    shopcar:function(){
      this.show1=true;
    },
    clear:function(){
      this.show1=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.promises{
  display:flex;
  p{
    flex:1;
    margin-bottom: 10px;
    margin-top: 10px;
  }
}
.float{
  display: flex;
  border-bottom:1px solid #eee;
  p{
    padding:5px 10px;
    &:first-child{
      color:red;
    }
    &:last-child{
      flex:1;
      text-align:right;
    }
  }
}
.wrapper{
  .content{
    width:100%;
    text-align:left;
    p{
      width:100%;
      img{
        width:320px;
        height:auto;
      }
    }
  }
  .popup{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.35);
    .white{
      width: 100%;
      height: 250px;
      background: #fff;
      position: fixed;
      z-index: 100;
      text-align: left;
      left: 0;
      right: 0;
      bottom: 0;
      .submit{
        height: 35px;
        line-height: 35px;
        text-align: center;
        background: #801a2a;
        color: #fff;
        font-size: 14px;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .img{
        display: -webkit-flex;
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #eee;
        .red{
          color: red;
          font-size: 14px;
        }
        p{
          line-height: 20px;
        }
        img{
          text-align: left;
        }
      }
      .uls{
        width: 100%;
        padding-left: 10px;
        margin-top: 5px;
        li{
          display: inline-block;
          margin-right: 5px;
          margin-bottom: 3px;
          line-height: 15px;
          padding: 5px;
          white-space: nowrap;
          border: 1px solid #000;
          float: left;
        }
        h3{
          margin-bottom: 5px;
        }
      }
      .num{
        display: -webkit-flex;
        justify-content: space-between;
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 100%; 
        left: 10;
        right:10;
        bottom:-506px;
        .inp{
          input{
            width: 40px;
            text-align: center;
          }
          button{
            padding: 0 5px 0 5px;
          }
        }
      }
    }
  }
  .commodity{
    height:45px;
    line-height:45px;
    text-align:center;
  }  
  .Recommend{
    width:100%;
      dl{
        float: left;
        width:50%;
        background: #eee;
        box-sizing: border-box;
        padding-bottom: .04rem;
        &:nth-child(even){
          padding-left: .02rem;
        }
        &:nth-child(odd){
          padding-right: .02rem;
        }
        dt{
          position: relative;
          width:100%;
          img{
            position: absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
          }
          &:after{
            content:'';
            padding-top:100%;
            display: block;
            width: 100%;
          }
        }
        dd{
          width: 100%;
          background: #fff;
          box-sizing: border-box;
          text-align: center;
          p{
            padding: 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
  }
  .footer{
  border-top: 1px solid #e5e5e5;
  position: fixed;
  bottom: 0;
  background: #fff;
  display: -webkit-flex;
  padding: 10px 0;
  align-items: center;
  div{
    padding-left: 10px;
    i{
      font-size: 22px;
      color: #ccc;
    }
  span{
    padding-left: 61px;
    white-space: nowrap;
  }
  &:nth-child(5){
    span{
      padding-left: 0;
      background: #801a2a;
      color: #fff;
      padding: 18px;
    }
  }
}
}
}
</style>
