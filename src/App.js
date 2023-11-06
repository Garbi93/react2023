import React from "react";

function App(props) {
  // HOOK : use로 시작하는 함수
  // hook은 component 상단에 작성해야함
  // 조건문 이나, 반복문, 종속된 함수 내부에 작성하면 안됨
  function handle() {
    // 종속 함수
    // hook 호출 코드 작성 불가
  }

  if (true) {
    // 조건문
    // hook 호출 코드 작성 불가
  }

  for (let i = 0; i < 3; i++) {
    // 반복문
    // hook 호출 코드 작성 불가
  }

  // =================================================================

  return <div></div>;
}

export default App;
