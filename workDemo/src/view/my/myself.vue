<template>
	<div class="my-self">
   <p>请输入手机号码验证码直接登录</p> 
   <ul>
       <li>手机号：<input type="text"></li>
       <li>验证码：<input type="text"> 
        <span class="form-send" v-if="sendSmsFlg" @click="sendSms">发送验证码</span>
        <span class="form-send" v-else>{{sendTime}}秒后重新发送</span>
      </li>
   </ul> 
   <div class="clear"></div>
   <router-link to="/myDeng">
      <div class="btn">登陆</div>
   </router-link>

  </div>
</template>

<script>
export default {
  name: 'mySelf',
  data () {
    return {
      isShow:false,
      len:"",
      sendSmsFlg:true,
      sendTime:60
    }
  },
  watch:{
    len:function(val){
        this.isShow=val.length>0?true:false
    }
  },
  methods:{
    clear(){
      this.len=""
    },
    sendSms(){
      this.sendSmsFlg=false;
      let codeArr=[];
      for(var i=0;i<4;i++){
          codeArr.push(this.getRandom(0,9)); 
      };
      codeArr=codeArr.join("");
      console.log("%c"+codeArr,"font-size:30px;")
      let that=this;
      let time=setInterval(function(){
        if(--that.sendTime==0){
           clearInterval(time)
           that.sendTime=60;
           that.sendSmsFlg=true;
        }
      },1000)
    },
    getRandom(min,max){
      var random=Math.random();
      return Math.floor((max-min+1)*random+min)
    }
  }
}
</script>
<style scoped lang="less">
.my-self{
  .clear{
    clear:both;
  }
  p{
    height: 3rem;
    line-height: 3rem;
    background: #fff9f3;
    color: #991f33;
  }
  ul{
    margin-top: 1rem;
    li{
      margin-top: 30px;
      border-bottom: 1px solid #eee;
      margin-left: 10px;
      float: left;
      input{
        border: none;
      }
    }
  }
  .btn{
    width: 80%;
    height: 2.5rem;
    line-height: 2.5rem;
    background: #991f33;
    color: #fff;
    font-size: 14px;
    margin:25px auto;
  }
}
</style>
