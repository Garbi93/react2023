import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function App() {
  const [number, setNumber] = useState(0);

  function handlePlusButtonClick(e) {
    setNumber(number + 1);
  }
  function handleMinusButtonClick(e) {
    setNumber(number - 1);
  }

  return (
    <div>
      <input type="number" value={number} />
      <Box>
        <Button onClick={handlePlusButtonClick}>+</Button>
        <Button onClick={handleMinusButtonClick}>-</Button>
      </Box>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>+</Button>
        <Button onClick={() => setNumber(number - 1)}>-</Button>
      </Box>
    </div>
  );
}

export default App;
