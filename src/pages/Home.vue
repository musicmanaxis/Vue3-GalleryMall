<template>
  <div class="Home">
    <!-- 뷰라우터 설치:npm i vue-router  -->


  <div class="album py-5 bg-body-tertiary">
   <div class="container">
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <div class="col" v-for= "(item, index) in state.items" :key="index">  
<!-- state: 상태 관리용 객체. items: state 안의 배열로, 서버에서 가져온 데이터를 담음. item: items 배열의 각 요소로, 객체형태로 처리.-->
            {{ item.name }}
            <Card :item="item"/>
            <!-- item이라는 객체를 Card.vue에 넘긴다. 실제 디비 items테이블의 하나의 행(item)에 해당 -->
            
         </div>
       </div>
    </div>
   </div>
</div>
</template>


<script>
import axios from 'axios';  
//http통신으로 spring서버와 데이터를 받기 위해 설정, npm install axios를 해줘야 함
//Axios는 RESTful API와 통신하기 위해 GET, POST, PUT, DELETE 같은 HTTP 메서드를 쉽게 사용할 수 있게 해줍니다.
import CardComponent from '../components/Card.vue'
import { reactive } from 'vue';

 export default{
  name:'HomeComponent',
  components:{
    Card:CardComponent
  },
  setup(){
    const state=reactive({   //items배열을 갖는 state객체 생성
        items:[]
    })
  //springServer에서 받아온 데이터를 state객체의 items 배열로 받는다.
  //axios.get("/api/items")로 요청하면 서버로부터의 응답 객체(response)를 받아 그 객체 속성중에 data속성이 실제 data가 들어있어 처리
     console.log('axios.get("/api/items"):'+ axios.get("/api/items"))
      axios.get("/api/items").then((object)=>{   //then(({data})로 하면 바로 속성에 접급할수 있다.
        console.log('/api/items에서 가져온 배열:'+object.data+',  배열크기:'+object.data.length)
        state.items=object.data;
    })
    
    return{
      state  //return을 하게 되면 상단의 template에서 쓸 수 있다.
    }
   }  //setup()
  }



</script>

<style >

</style>