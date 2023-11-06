import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  // set... 메소드로 상태를 변경할 수 있음
  // 이때에 react는 상태가 변경된 유무를 해당 값이 같은지 아닌지로 판단하여 re-render를 결정한다.
  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 });

  function handleNumberObjectChange() {
    numberObject.number = numberObject.number + 1;
    setNumberObject(numberObject);
  }

  return (
    <div>
      <Box>
        <Button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          number 변경
        </Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumberObjectChange}>number 객체 변경</Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </div>
  );
}

export default App;
