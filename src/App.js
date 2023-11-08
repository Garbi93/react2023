import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // 첫번째 파라미터(setup) : The function with your Effect's logic. (부수적인 작용이 있는 함수)
  // 두번째 파라미터 : setup을 실행시키는 값의 나열(배열),
  // 아무것도 나열하지 않으면(빈 배열) 첫 렌더링 때만 실행시키도록 한다.

  // 두번째 파라미터에는 state, prop, 등 다양한 것들이 들어갈 수 있다.
  useEffect(() => {
    console.log("effect 함수 실행됨");
  }, [number, text]);

  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;
