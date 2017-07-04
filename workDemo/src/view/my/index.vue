<template>
  <div class='wrapper'>
      <div class='user'>
          <!-- <img :src=Avatar />
          <p>{{NickName}}</p> -->
          <p></p>
          <b></b>
      </div>
      <div class='dingdan'>
          <div class='title'>
              <span>我的订单</span>
              <p>查看全部订单 ></p>
          </div>
          <div class='list'>
              <ul>
                  <li>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVRJREFUeNrsmbtKxEAUhs8saVIo2ESWkELfQKy3sbNIFfAFVvIONgvBwlfYFNZh6xQ2Wm0v1im0iEElYKFFynjOkgGL3aTaZAL/gW8uzBQfw9wyUXVd09hiQiMMSPcVKgzDS87vmanhrh/MPI7jh8lIhKlxFFey/gkrw6Vr7YqFCGlIQxrSm1g3e+MQrMc40q0HndXSNsOchjSkIQ1pSO9L+ohZMu8tx+4PE/UlbXW0HzJPzFlHvwNmwTx23Rv6kL4RYcdxKAgCknxbJElCWZZJ8diE6XElie/7O4XlLTDPc119Hlr6hDm1bZtc193ZqSgKqqpKim/M69DS55J4nkdKbb8plmVJaZrq6sqEhfgliczVKOrcGF6YO1O+XG6Z35Y+30zMXDTbnhFb3qIBJyKkIb3nhSgv7NPm4mN6fOqRvtYVw6Ng5ptHEfxHhDSkh48/AQYAOgdpIUWPZRcAAAAASUVORK5CYII'>
                    <p>待付款</p>
                  </li>
                  <li>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVVJREFUeNpi/P//P8NQA0wMQxCMOppegDEtLc0TSM8FYslB7tbnQJw8c+bM7UxDxMEMUDeC3MrAguRgRhINARc79fX1JGlqbGxkoMA+ydGMOOroUUePOnrU0aOOHnU0DLBQ07CfP38ynDt3DoxBwMjIiMHQ0JCBg4Nj8Dn6zZs3DCdPnmS4dOkSw69fv+Diu3btYjhw4ACDnp4eg7m5OYOIiMjgcPTixYsZ7t27h9yo2QPEU6D8HKAnXM6cOcMIxAxKSkqDw9FQB38BuR/q2GtI0puAWAvkeCCOBarlGeiMeASIbwNxMRDLAnEWmoNh4BpUThaqFqTn4ECFtC2J6j8AcR8Uj5bTo44edfSooxHgMLRywYYPD8WQZqSmYdRsMNmOpulRR486etTRo46mSccWNMIuCa25Bjt4AQvpFBhnkIOnQJwMrl5H5xFHHT3q6IEHAAEGAMspXDu1VNnHAAAAAElFTkSuQmCC'>
                    <p>待发货</p>
                  </li>
                  <li>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAh5JREFUeNrsmT1PAkEQhucM4ShMTKAy2gAVldioPTRGOztjYxAuNv4A/4WVIWBnYmflRyHUYIkNMQY6ow3ESIM05ztkLyEB5di7eG7YSZ67ze1lZ2dnP2Z3Ddu2SWVZIMVFGxC0GIVCYRvvC7D8x7rfQA7cF4tFTx4IovIkdF54LSQ0Unnjjw2w/Wg4PYi1AfNuQOg/VMKyLKU9YLukB2rgBIRV7EKLYAucgUew8l8MMFyyBPbAC0iDW2Cq5IFPcA02wDNYAwUVZ6EPcCrS+6pOow/iva6qAT3xNvVKrA3wMZSwtQcC9kAQOzLtgbkxICzC2JpYRCaGtj7IzHrcbGg4bL0REeCobAkOwS549Vh5KT0hFy0yLDQajVI2m6VEIjHMaLfbVKlUqNvtOqHtJvjy0PJSeqZ1Id7rpWOxGOXzeUqlUmSa5hBO8zfOc0JbL7tKWT3TDNjnRyaToUgkMpbJ3zhv9F9JkdbDXYjPKJd/m5cdd06SZDI52ldl5nbbg5539sARJxScQXkw59iAO+GBSfvQujOQfpJWq+Uk6zPsb/3Qs8p1D/12tG1Z1hW7rFqtUjweH+uf/X6fOE/IlewxuRc90wYx/9nodDpUKpWo2WzSYDAYwulyuUycB3kS/8qKtB5j2iUfWuenBcaRBthBq3hayGT1GG5uKVE4LzTH4ACkxOcmuATnKHTgx6iU0WPoa1ZtgDZAGxCofAswAOBN4RWiT1JMAAAAAElFTkSuQmCC'>
                    <p>待收货</p>
                  </li>
                  <li>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbdJREFUeNrsmT9Iw1AQhxMpDboEixZRyOaqi+CiLoJOooO4OVSwg6AgQikqagQHHRxcpCBmcFNcdBHEqToILrq5BkSIYCmCkiLG38F1sNZKpX/ek3fwwT1K2y+Py71rqgdBoMkWDZqEoaRrFXo8Hg9Ho9HDbDY74vu+kBdhGMaHaZqnnudNpFKpHEluYTEqqjAFuZEj0nVah8AkJbFYTLMsS0hp13U1x3EonQZJ2t0IrUQVLnCLqO6hpP+jdCif2LatC+4aqPJQ0kpaUuk038F/IV0B10tw9aXlVXsErsBn9H/r0+W8SdW0klbdo7LdRZSdLqu7yNI9Qtync2BAlpqeAr2gRZYbsRGscL4mi/Qs6AA34EgG6WZ6zsH5Yv7Xi+jSCRa/AOcyHC7tYI53NynLibgKmsAx17MQ0jQb34LuIq91cpt7B8sinYj03V3gGswXnIobfKDsg3uRpAfBLgiDbXAG2kAPGAdvGj/aLSb9zHlfjaVfwQwYA09gCNyBPd71HfDwk/RBlae43ya4E65rammtnGfAZqm6SvBVZeo4wT2CYbAAXsBSKR9d/Y+opJV0/eNTgAEAmr6XjlsWOe4AAAAASUVORK5CYII='>
                    <p>待评价</p>
                  </li>
                  <li>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcNJREFUeNrsmT9Lw0AUwJMSBNGl2jr2C4joUFChHdpJ/Q4OGcyok+KaVT9Bpgx+CAfFCi12EEHw356tVnRwEBWN7+QFQsilSXPx7uQe/JqQ3MGPR9+9S6L7vq/JFrqSVtIJ0pZlTcDxENgEyoJ6vgBHwK7jOB8GnBwA24Int4yOb8C+gRnWTNPUarVa7AzbtnXO0g2gC2wR6RL8zJCrNGFBoofHX9eSJmEoaSVdkDSp5gugkmEOGdsHznlJTwGrwGlK8QqOXQGmeUmvAffAYgrxKo4hY++AdV7Sj0A7JH5CEa/iPTLmFmgBQ56FOAiJL8WIR4XbeYVZrR6B+ENIfDYifMNKmISRY+41CkWDiD9Fri3g3ymIK6DOI9PvOeZ+8sr0csK94MmikN2hauMMgnTZSyxiaaQnsUA7SeKiSW9gx5xPEh9Xuo/FRiNckDS6lC7bGiU+rvQXg6x+U64PY8TnWCx5jRH38y55gXgHxc9kWfKiGZdmnQ6LM+mIfy1+DLzKIh2I16Vu40VlupewpAkr3VTvPf6L9DM58TxPqkIkb9h3XNdN05a1Agu3mUV6D/cIPD9fZNqjqK9bSlpJCxA/AgwAjyOChY/U74cAAAAASUVORK5CYII='>
                    <p>退款</p>
                  </li>
              </ul>
          </div>
          <div class='biglist'>
              <ul>
                  <li><span>收藏宝贝</span><b>></b></li>
                  <router-link to="/redBag">
                     <li><span>红包优惠券</span><b>></b></li>
                  </router-link>
                  <li><span>足迹</span><b>></b></li>
                  <li><span>积分商城</span><b>></b></li>
                  <li><span>收货地址</span><b>></b></li>
                  <li><span>绑定手机</span><b>></b></li>
                  <li><span>海米客服</span><b>></b></li>
              </ul>
          </div>
      </div>
      <div class='btn' @click='clear'>
          退出登录
      </div>
        <footerNav></footerNav>
  </div>
</template>
<script>
import footerNav from '@/components/footerNav'
  export default {
      data () {
          return{}          
      },
      methods:{
          clear:function(){
              var torf=confirm('确定退出登陆？')
              if(torf){
                  window.localStorage.clear()
                  this.$router.push({path:'/mySelf'})
              }
          }
      },
      components:{
        footerNav
      }
  }
</script>
<style lang='less' scoped>
     .wrapper{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
     }
     .user{
        width: 97%;
        height: 60px;
        display:flex;
        align-items:center;
        background:#fff;
        padding-left: 3%;
        margin-bottom:2%;
        p{
          font-size:14px;
          margin-right: 5%;
          border: 1px solid #eee;
          width: 40px;
          height: 40px;
        }
        img{
          width: 40px;
          height:40px;
          margin-right: 5%;
        }
        b{
          display:block;
          width: 20px;
          height: 20px;
          background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAR5JREFUeNrs2b0KglAUB3CNlj5oqyeQltagyaGxLWpvdAh6mmjxHaJNaGqNaG3yEZr7WML+FwzKJfWeczU6B/7c5ao/jlcuqh1FkfVrVbF+sAQtaEEL+o/Q1W8TfN9vYVgiE6SZ4dx3ZIxsU8xtI4E6xvM8l6LTK2SWEawq7VarwDukj9RIOh13WFUXCYnv9AvcQ07IiGpN1+ORGzxEzmV+EHODi0JrgYtAa4NNo0nAJtFkYFNoUrAJNDmYG80C5kTnAe+RA9U2bqrDg6I63eFaEpzogBvMgb4hR04wx5p2LQMl74iCFrSgBf1R13h0GB1O4lra6M3bJ4SIKWHiWto74hx5IFOkwdTpC7JGFmkm2/KjSNCCFrSgS11PAQYAtIJgn5JOJd0AAAAASUVORK5CYII=) no-repeat;
          background-size:contain;
        }
     }
     .dingdan{
        width: 100%;
        background:#fff;
        margin-bottom:2%;
        .title{
            width: 100%;
            height: 37px;
            display:flex;
            align-items:center;
            border-bottom:1px solid #f5f5f5;
            justify-content:space-between;
            span{
              padding-left:3%;
            }
            p{
              color: #ccc;
            }
        }
        .list{
            width: 100%;
            height: 60px;
            ul{
              display:-webkit-flex;
              justify-content: space-around;
              width: 100%;
              height: 100%;
              align-items:center;
              li{
                img{
                  width: 20px;
                  height: 20px;
                }
              }
            }
        }
        .biglist{
            background: #fff;
            width:100%;
            margin-bottom:2%;
            ul{
              li{
                width: 98%;
                margin-left:2%;
                border-bottom:#f5f5f5 1px solid;
                height: 40px;
                display:flex;
                justify-content:space-between;
                align-items:center;
                span{
                  padding-left: 2%;
                }
                b{
                  padding-right:2%;
                  font-weight:normal;
                  font-size:14px;
                  color: #ccc;
                }
              }
            }
        }

     }
     .btn{
                 width: 100%;
                 height: 40px;
                 line-height: 40px;
                 text-align:center;
                 background:#fff;
             }
</style>
