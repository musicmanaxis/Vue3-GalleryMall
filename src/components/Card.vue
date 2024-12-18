<template>
  
   
        <div class="card shadow-sm">
          <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}" />
          
          <div class="card-body">
            <p class="card-text">{{ item.name }}이 들어있어요</p>
            <div class="d-flex justify-content-between align-items-center">
              <button class="btn btn-primary">구입하기</button>
              <small class="text-body-secondary">{{ item.price }}</small>
            </div>
          </div>
        </div>
     

</template>

<script>


export default{
  name:'CardComponent',
  props:{
    item:Object,  //상단 template에서 넘어온 값을 쓸수 있다.
  }
}


</script>

<style scoped>
.card .img{
  display:inline-block;
  width:100%;
  height:250px;
  background-size:cover;
  background-position: center;
}

</style>


