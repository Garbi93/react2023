import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  // 3. context 사용하기 : useContext(Context이름);
  const message = useContext(MessageContext);
  // 4. 받은메세지 사용하기
  return <Text> 받은 메세지 : {message} </Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App() {
  const [message, setMessage] = useState("");

  // message state를 CComp에 전달 하기 -> context를 사용 하여
  // 1. context 만들기 : createContext();
  // 2. context에 state 넣기 : <Context.Provider value={state이름}></Context.Provider>
  // 3. tree안에 context사용하기

  return (
    <div>
      <Button onClick={() => setMessage("바꾼 메세지!!!")}>
        메세지 바꾸기
      </Button>
      {/* 2. context에 state 넣기 */}
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1. context 만들기
// context 이름은 : (하는일)...Context (예-> MemberContext, MessageContext) 로 지어주면 좋다.
// 대문자로 시작
const MessageContext = createContext(null);

export default App;
