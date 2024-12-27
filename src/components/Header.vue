<template>
  
  <header data-bs-theme="dark">
  <div class="collapse text-bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        
        <div class="col-sm-4  py-4">
          <h4>사이트맵</h4>
          <ul class="list-unstyled">
              <li>
                <router-link to="/" class="text-white">메인 화면</router-link>                
              </li>
              <li>
                <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>
                <!-- !$store.state.account.id가 없으면 로그인이 보이고 있으면 로그아웃이 보인다. -->
                <a class="text-white" @click="logout()" v-else>로그아웃</a>                  
              </li>
<!-- <router-link>:Vue Router 라이브러리가 제공하는 컴포넌트(<a> 태그와 유사하게 동작), 
     페이지를 새로고침하지 않고 URL을 변경하며, 라우트와 연결된 컴포넌트를 표시,  to="/"는 라우터에서 정의된 루트 경로로 이동
     $는 Vue가 기본적으로 제공하는 객체나 메서드라는 것을 명시적 표기법. 사용자가 정의한 변수나 메서드와 구분역할. 뷰에서 제대로 동작않 할 수도 있음
     -->
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <strong>Album</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>

</template>

<script>
import router from '@/scripts/router';
import store from '@/scripts/store';

export default{
  name:'HeaderComponent',

  setup(){
    const logout=()=>{
      store.commit('setAccount', 0); //로그아웃시 store.js의 setAccount에 0을 넘겨줌
      sessionStorage.removeItem("id"); //로그아웃시 브라우저의 세션스토리지에서 삭제
      router.push({path:'/'});
      
    }
    return{logout}
  }
}


</script>


