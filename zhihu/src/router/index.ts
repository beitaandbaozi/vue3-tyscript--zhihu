import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const ColumnDetail = () => import('../views/ColumnDetail.vue')
const AddPost = () => import('../views/AddPost.vue')
// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/column/:id',
      name: 'column-detail',
      component: ColumnDetail
    },
    {
      path: '/addpost',
      name: 'add-post',
      component: AddPost
    }
  ]
})
export default router
