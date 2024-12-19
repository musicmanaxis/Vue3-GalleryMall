import { createApp } from 'vue'
import App from './App.vue'
import{createRouter, createWebHistory }from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'

const routes=[
  {path:'/', component:Home},  //'/'로 들어올때는 Home으로 들어와라 는 뜻
  {path:'/login', component:Login},  ///http://localhost:3000/login 로 접속해볼 것

]

const router=createRouter({
  history:createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
