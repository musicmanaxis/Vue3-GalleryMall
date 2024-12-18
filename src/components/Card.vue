<template>
  
   
        <div class="card shadow-sm">
          <img :src="item.imgPath" />
          <div class="card-body">
            <p class="card-text">{{ item.name }}이 들어있어요</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-body-secondary">9 mins</small>
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

</style>


