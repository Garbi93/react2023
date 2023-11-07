import React, { createContext, useContext, useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function MyInput() {
  // 3. 객체를 구조분해 할당 하여 받아서 입맛에 맞게 사용하기
  const { text, setText } = useContext(TextContext);
  return <Input value={text} onChange={(e) => setText(e.target.value)} />;
}

function MyText() {
  // 3. 객체를 구조분해 할당 하여 받아서 입맛에 맞게 사용하기
  const { text } = useContext(TextContext);
  return <Text>{text}</Text>;
}

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      {/* 2. 변수 선언한 Context를 사용할 Comp에 감싸주기 그리고 useState한 것을 객체로 받기 */}
      <TextContext.Provider value={{ text, setText }}>
        <MyInput />
        <MyText />
      </TextContext.Provider>
    </div>
  );
}

// 1. createContext 사용
const TextContext = createContext(null);

export default App;
