<template>
    <div class="order"> <!-- 여기 수정  -->
<!-- 아래하단 부터 https://getbootstrap.com/docs/5.0/examples/checkout/에서 소스보기 한 것을 복사해서 붙여넣기 -->
<div class="container">   
  <main>
        <div class="py-5 text-center"><h2>주문하기</h2>
          <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form
            group has a validation state that can be triggered by attempting to submit the form without completing
            it.</p></div>

        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last"><h4
              class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">구입 목록</span>

            <span
                class="badge bg-primary rounded-pill"> {{ state.items.length }} </span></h4>

            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm" v-for="(item, index) in state.items" :key="index">
                <div>
                  <h6 class="my-0">{{ item.name }}</h6>
                </div>
                <span class="text-muted">
                  ₩{{ lib.getCommaFormated(item.price -(item.price*item.discountPrice/100)) }} 원
                </span>
              </li>
            </ul>
            <h3 class="text-center total-price">
              ₩{{ lib.getCommaFormated(computedPrice) }} 원
            </h3>
          </div>
          <div class="col-md-7 col-lg-8"><h4 class="mb-3">주문자 정보</h4>
            <div class="needs-validation" novalidate="">

              <div class="row g-3">
                <div class="col-12"><label for="username" class="form-label">이름</label>
                
                </div>
                <div class="col-12"><label for="address" class="form-label">주소</label>
                  <input type="text" class="form-control" id="address">
                </div>
              </div>
              <hr class="my-4">
              <h4 class="mb-3">결제 수단</h4>
              <div class="my-3">
                <div class="form-check">
                  <input id="card" name="paymentMethod" type="radio" class="form-check-input" value="card" >
                  <label class="form-check-label" for="card">신용카드 </label></div>
                <div class="form-check">
                  <input id="bank" name="paymentMethod" type="radio" class="form-check-input" value="bank" >
                  <label class="form-check-label" for="bank">무통장입금</label>
                </div>
              </div>
              <label for="cc-name" class="form-label">카드 번호</label>
              <input type="text" class="form-control" id="cc-name" >
              <hr class="my-4">
             
            </div>
          </div>
        </div>
      </main>
    
         </div> 
         <!-- container -->

         
    
     </div>
</template>

<script>
import axios from 'axios';
import lib from "@/scripts/lib";
import { reactive, computed } from 'vue';


  export default{
    setup(){
      const state=reactive({
          items:[]
      });
      const load=()=>{
        axios.get("/api/cart/items").then(({data})=>{
        console.log(data);
        state.items=data;
       })
      }

      const computedPrice = computed(() => {
      let result = 0;

      for (let item of state.items) {
        result += item.price - item.price * item.discountPrice / 100;
       
      }
      
      return result;
     })//computedPrice

     load();

    return {state, lib, computedPrice }
    }
  }

  

</script>

<style scoped>

</style>