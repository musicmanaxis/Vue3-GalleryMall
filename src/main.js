import { createApp } from 'vue'  
import router from "@/scripts/router.js" //라우터 설정, npm i vue-router   라우처를 먼저 설치해야 실행이 된다.
import store from "@/scripts/store.js"  //main.js에서 store.js를 사용하겠다.
import App from './App.vue' 



createApp(App).use(store).use(router).mount('#app') 
