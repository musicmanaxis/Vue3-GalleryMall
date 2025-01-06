<template>
    <div class="cart">
      <div class="container">
        <ul>
          <li v-for="(item, index) in state.items" :key="index">
            <img :src="item.imgPath" />
            <span class="name">{{ item.name }}</span>
            <span class="price"> 할인가:₩{{ lib.getCommaFormated(item.price -(item.price*item.discountPrice/100)) }}</span>
            <i class="fa fa-trash" @click="remove(item.id)"></i>  <!-- 쓰레기통 모양 -->
    
          </li>
        </ul>
        <router-link to="/order" class="btn btn-primary">구입하기</router-link>
        <!-- 클릭하면 /order로 이동 -->
      </div>
     </div>
</template>

<script>
import axios from 'axios';
import lib from "@/scripts/lib";
import { reactive } from 'vue';


  export default{
    setup(){
      const load=()=>{
        axios.get("/api/cart/items").then(({data})=>{
        console.log(data);
        state.items=data;
       })
      }
      const state=reactive({
          items:[]
      })
      const remove=(itemId)=>{
        axios.delete(`/api/cart/items/${itemId}`).then(()=>{
          load();
          console.log("장바구니에서 삭제 성공:"+itemId);
        })
      }
      load(); //컴포넌트가 생성될 때 한번만 실행
      return {state, lib, remove}
    }
   
  }

</script>

<style scoped>
.cart ul {
  list-style:none;
  margin: 0;
  padding: 0;
}

.cart ul li{
  border:1px solid #eee;
  margin-top: 25px;
  margin-bottom: 25px;
}

.cart ul li img {
  width: 150px;
  height: 150px;
}

.cart ul li .name{
  margin-left: 25px;
}

.cart ul li .price {
  margin-left: 25px;
}

.cart ul li i {
  float: right;
  font-size: 20px;
  margin-right: 50px;
  margin-top: 60;
}

.cart .btn{
  width: 300px;
  display: block;
  margin: 0 auto;
  padding:30px 50px;
  font-size: 20px;
}
</style>