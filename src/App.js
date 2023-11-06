import React, { useRef, useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("");
  const textRef = useRef();

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleOnClick() {
    if (text.length < 5) {
      alert(
        5 -
          text.length +
          "글자 가 모자릅니다 " +
          (5 - text.length) +
          "더 작성해주세요",
      );
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  }

  return (
    <div>
      <Box>
        <Input value={text} ref={textRef} onChange={handleOnChange} />
        <Button onClick={handleOnClick}>작성완료</Button>
      </Box>
    </div>
  );
}

export default App;
