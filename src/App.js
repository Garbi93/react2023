import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp2(props) {
  return (
    <Box>
      <Text>{props.message}</Text>
    </Box>
  );
}

function MyComp1({ onButtonClick }) {
  return (
    <Box>
      <Button onClick={onButtonClick}>텍스트 바꾸기!</Button>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("hello");
  function handleButtonClick() {
    setMessage("안녕하세요");
  }
  return (
    <div>
      <MyComp1 onButtonClick={handleButtonClick}></MyComp1>
      {/*// 이런식으로 변수를 지어준다*/}
      {/* MyComp1에 있는 버튼이 클릭되면 */}
      <MyComp2 message={message}></MyComp2>
      {/* MYComp2에 있는 text가 바뀌게  */}
    </div>
  );
}

export default App;
