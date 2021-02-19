import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lessons from '../views/Lessons.vue'
import Profile from '../views/Profile.vue'
import Table from '../views/Table.vue'
import Teachers from '../views/Teachers.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lessons',
    name: 'Lessons',
    component: Lessons
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
