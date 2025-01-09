<template>
    <div class="orders"> <!-- 여기 수정  -->
<!-- 아래하단 부터 https://getbootstrap.com/docs/5.0/examples/checkout/에서 소스보기 한 것을 복사해서 붙여넣기 -->
      <div class="container">   
       
       <table class="table table-bordered">
        <thead>
          <tr>
            <th>번호</th>
            <th>주문자명</th>
            <th>주소</th>
            <th>결제수단</th>
            <th>구입항목</th>
           </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index1) in state.orders" :key="index1">
              <td>{{ state.orders.length-index1 }}</td>
              <td>{{ order.name }}</td>
              <td>{{ order.address}}</td>
              <td>{{ order.payment }}</td>
              <td>
                <div v-for="(item, index2) in order.items" :key="index2">{{item.name }}</div>
              </td>
            </tr>
          </tbody>
       </table>
      </div>  <!-- container -->
     </div>
</template>

<script>
import axios from 'axios';
import lib from "@/scripts/lib";
import { reactive } from 'vue';

  export default{
    setup(){
      const state=reactive({
          orders:[],
      })
      
      axios.get("/api/orders").then(({data}) => {
      // console.log(data);
      // state.orders=data;
      
      state.orders=[];
     
      for(let d of data){
        if(d.items){
          d.items=JSON.parse(d.items);
        }
        state.orders.push(d);
      }//for
     })//axios
      
    return {state, lib }
    }
  }

</script>

<style scoped>
.table{
  margin-top: 30px;
}

.table > tbody{
  border-top: 1px solid #eee;
}
</style>