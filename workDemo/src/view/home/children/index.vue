<template>
  <div class="homeIndex">
    <bannerBar :swiper-slide="swiperSlide"></bannerBar>
    <menuList :menu-list="menuList"></menuList>
    <navImg :nav-img="navImg" :nav-imgs="navImgs"></navImg>
    <brandSection :brand-section="brandSection"></brandSection>
    <goodThing :good-thing="goodThing"></goodThing>
    <hottestThings :hottest-things="hottestThings"></hottestThings>
    <hottestWatch :hottest-watch="hottestWatch"></hottestWatch>
    <hottestHome :hottest-home="hottestHome"></hottestHome>
    <goodBuy :good-buy="goodBuy"></goodBuy>
    <goodBeauty :good-beauty="goodBeauty"></goodBeauty>
    <goodHome :good-home="goodHome"></goodHome>
    <search :search="search"></search>
  </div>
</template>

<script>
import bannerBar from '@/components/swiper'
import menuList from '../../home/component/menuList.vue'
import navImg from '../../home/component/navImg.vue'
import brandSection from '../../home/component/brandSection.vue'
import goodThing from '../../home/component/goodThing.vue'
import hottestThings from '@/components/hottestBrands/index.vue'
import hottestWatch from '@/components/hottestBrands/watch.vue'
import hottestHome  from '@/components/hottestBrands/hothome.vue'
import goodBuy from "@/components/hottestBrands/goodbuy.vue"
import goodBeauty from '@/components/hottestBrands/goodbeauty.vue'
import goodHome from '@/components/hottestBrands/goodhome.vue'
import search from '../../home/component/search.vue'
import footerNav from '@/components/footerNav/index.vue'
export default {
  name: 'homeIndex',
  data () { 
    return {
      swiperSlide: [],
      menuList: [],
      navImg: [],
      navImgs: [],
      brandSection: [],
      goodThing: [],
      hottestThings: [],
      hottestWatch: [],
      hottestHome: [],
      goodBuy: [],
      goodBeauty: [],
      goodHome:[],
      search:[]
    }
  },
  components: {
    bannerBar,
    menuList,
    navImg,
    brandSection,
    goodThing,
    hottestThings,
    hottestWatch,
    hottestHome,
    goodBuy,
    goodBeauty,
    goodHome,
    footerNav,
    search
  },
  mounted () {
    this.getBanner(),
    this.getBuy()
  },
  methods: {
    getBanner () {
        this.$http.get('/api/indexData').then(function (response) {
          this.swiperSlide = response.data.data[0].Records
          this.menuList = response.data.data[1].Records
          this.navImg = response.data.data[2].Records
          this.navImgs = response.data.data[3].Records
          this.brandSection = response.data.data[4]
          this.goodThing = response.data.data[5].Records
      }, function (response) {
        console.log(response)
      })
    },
    getBuy() {
        this.$http.get('/api/buyData').then(function (response) {
          this.goodBuy= response.data.data[0]
          this.goodBeauty= response.data.data[1]
          this.goodHome= response.data.data[2]
          console.log(response.data.data[0])
      }, function (response) {
        console.log(response)
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1{
  font-size: 16px;
}
.homeIndex{
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  margin-bottom: 45px;
}
</style>
