import React, { useEffect, useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);
  // useEffect 사용 시 자주 하는 실수
  useEffect(() => {
    console.log("코드실행");
    // useEffect 안에서 트리거 변수 -> number 를 변경하는 행위
    // setNumber(number + 1); // trigger하는 값을 변경하면 안됨 -> 무한으로 요청을 보내게 됨
  }, [number]);

  return <div></div>;
}

export default App;
