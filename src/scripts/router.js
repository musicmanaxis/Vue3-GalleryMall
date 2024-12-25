import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'

//배열행태로 객체들이 주소와 연결하고자 하는 페이지 컴포넌트가 매핑되게 한다.
const routes=[
  {path:'/', component:Home},  //'/'로 들어올때는 Home으로 들어와라 는 뜻
  {path:'/login', component:Login},  ///http://localhost:3000/login 로 접속해볼 것

]

const router=createRouter({
  history:createWebHistory(),
  routes
})

export default router;

