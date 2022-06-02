import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import the component that we created
import EpieView from '../views/epieView.vue'
import UpPhoto from '../views/UpPhoto.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // url
    path: '/echarts/pie',
    //name is not important
    name: 'testcharts_pie',
    component: EpieView
  },
  {
    path: '/uploadimage',
    name: 'test_upload',
    component: UpPhoto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
