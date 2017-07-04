<template>
  <div class="nav">
    <div class="nav-list">
      <span v-for="item in navList.data">
        <router-link :to="item.Link+'/'+item.NavID" active-class="active">
          {{item.Title}}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navList',
  data () {
    return {
      navList: []
    }
  },
  mounted () {
    this.getNav()
  },
  methods: {
    getNav () {
      this.$http.get('/api/navList').then(function (response) {
        this.navList = response.data
      }, function (response) {
        console.log(response)
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav{
  font-size: 14px;
  background: #fff;
  .nav-list{
      overflow-x: auto;
      display: inline-flex;
      display: -webkit-box;
      width: 100%;
      height: 35px;
      border-bottom: solid #ccc 1px;
    span{
      display: block;
      line-height: 35px;
      text-align: center;
      &:first-child{
        padding-left: 5px;
      };
      a{
        border-bottom: 4px solid #fff;
        padding-left: 10px;
        padding-right: 10px;
        display: block;
        height: 26px;
        color: #242424;
        font-size: 12px;
        &.active{
          border-bottom-color:#000;
        }
      }
    }
  }
}
</style>
