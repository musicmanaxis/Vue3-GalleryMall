<template>
  <div class="Home">

<section class="py-5 text-center container">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Album example</h1>
      <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
      <p>
        <a href="#" class="btn btn-primary my-2">Main call to action</a>
        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
      </p>
    </div>
  </div>
</section>

  <div class="album py-5 bg-body-tertiary">
   <div class="container">
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <div class="col" v-for= "(item, index) in state.items" :key="index">  
            
            {{ item }}
            <Card :item="item"/>
            
         </div>
       </div>
    </div>
   </div>
</div>
</template>


<script>
import axios from 'axios';  
//http통신으로 spring서버와 데이터를 받기 위해 설정, npm install axios를 해줘야 함
import CardComponent from '../components/Card.vue'
import { reactive } from 'vue';

 export default{
  name:'HomeComponent',
  components:{Card:CardComponent},
  setup(){
    const state=reactive({
        items:[]
    })

      axios.get("/api/items").then(({data})=>{
        console.log(data)
        state.items=data;
    })
    
    return{
      state
    }
    }
  }



</script>

<style >

</style>