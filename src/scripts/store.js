// 이 코드는 Vue 애플리케이션 전체에서 사용자 정보를 관리하기 위한 중심적인 상태 저장소 역할을 합니다.
// 사용자가 로그인하면 사용자 ID를 Vuex 상태에 저장하고, 애플리케이션의 다른 컴포넌트에서 로그인 정보를 활용할 수 있습니다
//이를 위해서는 store.js에서 vuex를 만들어 별도로 js형태로 만들고 main.js에서 등록을 하면 다른 컴포넌트에서 import해서 사용할 수 있다.


import { createStore } from 'vuex'

const store = createStore({ //createStore 함수로 Vuex 스토어를 생성합니다.
  state () {  //상태:로그인한 사용자 ID와 같은 데이터를 저장.
    return {
      account:{
        id:0,  //로그인한 사용자의 아이디 0으로 일단 초기화
      }
    }
  },
  mutations: {  //변경(mutations): 상태를 업데이트할 때 사용, 
    setAccount(state, sendId){    //setAccount는 state.account.id 값을 변경하는 역할, state는 애플리케이션에서 관리할 데이터를 저장하는 곳
      state.account.id=sendId;  //
    }
  }
})

export default store
