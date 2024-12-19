export default{
  getCommaFormated(value){   //숫자를 컴마를 붙여서 변환주는 함수, 구글에서 검색하여 찾는 방식
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
 
}

