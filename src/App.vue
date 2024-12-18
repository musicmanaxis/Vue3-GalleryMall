<!--
 개요:쇼핑몰 갤러리를 운영하는 목적으로 
 1.vue서버를 운영하는 프론트 서버와
 2.spring 서버(GalleyrMallBackend)를 백앤드로 두어 이 프로젝트를 진행한다. 
 3.사전설정
   3-1.package.json에서 로컬pc에서 스프링서버와 충돌을 피하기 위해 뷰서버 포트번호를 3000으로 변경 
         "scripts": {"serve": "vue-cli-service serve --port 3000"}
   3-2.vue.config.js에서 spring서버의 데이터를 받기 위해
         '/api': { target: 'http://localhost:8080'} api로 들어오는 서버를 설정 
 -->

<template>

<Header />
<Home />
<Footer />

</template>

<script>
import HeaderComponent from './components/Header.vue';
import HomeComponent from './pages/Home.vue';
import FooterComponent from './components/Footer.vue';


export default {
  name: 'App',
  components: {
   Header:HeaderComponent,
   Home:HomeComponent,
   Footer:FooterComponent,
   
  }
}
</script>


<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}
</style>
