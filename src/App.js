import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  let result = 0;
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);

  function handleChangeResult1(e) {
    setResult1(Number(e.target.value));
    console.log(e.target.value);
  }
  function handleChangeResult2(e) {
    setResult2(Number(e.target.value));
    console.log(e.target.value);
  }

  result = result1 + result2;
  return (
    <>
      <Box display={"flex"}>
        <Input type="number" onChange={handleChangeResult1} /> +
        <Input type="number" onChange={handleChangeResult2} /> =
        <Text colorScheme="yellow">{result}</Text>
      </Box>
    </>
  );
}

export default App;
