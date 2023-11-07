import React, { createContext, useState } from "react";
import { MyInput } from "./component/MyInput";
import { MyText } from "./component/MyText";

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
export const TextContext = createContext(null);

export default App;
