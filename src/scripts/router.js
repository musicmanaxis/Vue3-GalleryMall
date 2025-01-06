import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Cart from '@/pages/Cart.vue'
import Order from '@/pages/Order.vue'
import NotFound from '@/pages/NotFound.vue'


//배열행태로 객체들이 주소와 연결하고자 하는 페이지 컴포넌트가 매핑되게 한다.
//페이지수에 따라 경로를 라우터에 배열형태로 등록해준다.
const routes=[
  {path:'/', component:Home},  //'/'로 들어올때는 Home으로 들어와라 는 뜻
  {path:'/login', component:Login},  ///http://localhost:3000/login 로 접속해볼 것
  {path:'/cart', component:Cart}, 
  {path:'/order', component:Order},
  {path: '/:pathMatch(.*)*', component: NotFound },  //없는 주소를 입력했을 때 404 처리

]

const router=createRouter({  //라우터 객체 생성
  history:createWebHistory(),
  routes
})

export default router;

