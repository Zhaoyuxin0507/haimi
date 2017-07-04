import Vue from 'vue'
import Router from 'vue-router'
import homeIndex from '@/view'
import Hello from '@/components/Hello'
import RecomPage from '@/view/home/children'
import beautyPage from '@/view/home/children/beautyPage.vue'
import homePage from '@/view/home/children/homePage.vue'
import typePage from '@/view/type/index.vue'
import headFen from '@/view/type/components/head.vue'
import search from '@/view/home/component/search.vue'
import headPin from '@/view/type/components/pinpai.vue'
import headLei from '@/view/type/components/fenlei.vue'
import shopPp from '@/view/shop/shop.vue'
import mySelf from '@/view/my/myself.vue'
import myDeng from '@/view/my/index.vue'
import details from "@/components/hottestBrands/details"
import redBag from "@/view/my/redbag.vue"
Vue.use(Router)
export default new Router({
  mode: 'history',
  scrollBehavior (savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect:'homeIndex',
      component: Hello,
      children:[
        {
          path: 'homeIndex',
          name: 'homeIndex',
          redirect:'homeIndex/RecomPage/2',
          component: homeIndex,
          children:[
            {
              path: 'RecomPage/:id',
              name: 'RecomPage',
              component: RecomPage
            },
            {
              path: 'beautyPage/13',
              name: 'beautyPage',
              component: beautyPage
            },
            {
              path: 'homePage/3',
              name: 'homePage',
              component: homePage
            }
          ]
        },
        {
          path: 'typePage',
          name: 'typePage',
          component: typePage,
          redirect:'typePage/headLei',
           children:[
            {
              path: 'headLei',
              name: 'headLei',
              component: headLei
            },
            {
              path: 'headPin',
              name: 'headPin',
              component: headPin
            }
          ]
        },        
        {
            path: 'search',
            name: 'search',
            component: search
        },
        {
            path: 'shopPp',
            name: 'shopPp',
            component: shopPp
        },
        {
            path: 'mySelf',
            name: 'mySelf',
            component: mySelf,
        },
        {
            path: 'myDeng',
            name: 'myDeng',
            component: myDeng
        },
        {
            path: 'redBag',
            name: 'redBag',
            component: redBag
        }   
      ]
    },
    {
      path:'/details/:ProductID',
      name:'details',
      component:details
    } 
  ]
})
