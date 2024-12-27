<!-- 1.backgroundImage는 원래 css에서 background-image로 표기하지만 
                 vue는 :style을 적용할 때 자바스크립트 형식(캐멜스타일)으로 표시해야 되서 backgroundImage로 표시
     2.{}는 JavaScript에서 객체를 정의할 때 사용 -> 키(backgroundImage) :값(`url(${item.imgPath})`)으로 객체를 만듭니다.
     3.${}는 JavaScript 변수를 문자열에 포함시킬 수 있습니다.
     4.css에서  background-image: url('이미지 경로')가 기본문법
           -->
<template>
  <!-- <span>:특정 부분을 선택해 스타일을 적용하거나 조작할 때 주로 사용 -->
  <!-- <small> 태그: 의미(semantic)를 추가하면서 크기를 작게 만듭니다. -->
        <div class="card shadow-sm">
          <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}" />
          <!-- 위는 스타일을 css에서 js형태로 코딩한 것임 ->url을 수시로 바꿀필요도 없고 별도의 css를 작성하지 않아도 된다. -->
          <div class="card-body">
            <p class="card-text">
              <span>{{ item.name }}&nbsp;</span>  
              <span class="discount badge bg-danger">  
                <!-- 부트스트랩제공(검색할것)badge:짧은 정보를 표시,  작은 크기의 텍스트와 테두리를 포함, 배경색이 채워짐. bg-danger:빨간색 배경 -->
                {{ item.discountPrice}}% 할인
              </span>
            </p>

            <div class="d-flex justify-content-between align-items-center">
              <button class="btn btn-primary">구입하기</button>
              <small class="price text-muted">정가:₩{{lib.getCommaFormated(item.price)  }}
                                                <!-- 3.자바스크립트에서 가져온 함수를 적용 -->
              </small>
          
              <small class="discount text-danger">
                할인가격:₩{{ lib.getCommaFormated(item.price -(item.price*item.discountPrice/100)) }}
              </small>
            </div>
          </div>
        </div>
     

</template>

<script>
//*1.숫자를 컴마로 변화하는 함수(getCommaFormated)를 자바스크립트 파일에 만들어 가져와서 사용함
import lib from "@/scripts/lib"  //@->src를 가리킨다.  ../scripts/lib 이렇게 해도 됨

export default{
  name:'CardComponent',
  props:{
    item:Object,  //상단 template에서 넘어온 값을 쓸수 있다.
  },

  setup(){
    return{lib}  //2.가져온 것을 이렇게 선언하면 상단에서 쓸수 있다.
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

.card .card-body .price{
  text-decoration: line-through;
}
</style>


