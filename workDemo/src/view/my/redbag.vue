<template>
	<div class="redbag">
   <ul class="uls">
      <li>可用</li>
      <li>已使用</li>
      <li>已过期</li>
    </ul> 
    <div class="main">
      <h3>提醒</h3>
      <p>1.红包/优惠券每个订单只可用一个</p>
      <p>2.红包/优惠券金额大于订单应付金额时，差额不予退回</p>
      <p>3.使用红包/优惠券的订单发生退款，红包/优惠券不予退回(特殊未指定的除外)</p>
    </div>
    <div class="price">
      <div class="left">
        <p>￥10</p>
        <span>满60使用</span>
      </div>
      <div class="right">
        <p>新人注册礼</p>
        <span>2017.05.23-2017.05.30</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'redBag',
  data () {
    return {
      
    }
  } 
}
</script>
<style scoped lang="less">
.redbag{
  text-align: left;
  .uls{
    height: 35px;
    display: block;
    zoom: 1;   
    border-bottom: 1px solid #eee; 
    li{
      float: left;
      line-height: 35px;
      width: 33.33%;
      text-align: center;
    }
  }
  .main{
    margin-top: 5px;
    height: 150px;
    border-bottom: 1px solid #eee;
    h3{
      padding-left: 2rem;
      padding-top: 1rem;
    }
    p{
      line-height: 23px;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  .price{
   display: -webkit-flex;
   height: 5rem;
   border-bottom: 1px solid #eee;
   .left{
    flex:1;
    text-align: center;
    border-right: 1px solid #eee;
   }
   .right{
    flex:2;
    text-align: center;
   }
  }
}
</style>
