import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ address, onChange }) {
  return (
    <Box>
      <Input value={address} onChange={(e) => onChange(e.target.value)} />
    </Box>
  );
}

function MyText({ address }) {
  return (
    <Box>
      <Text>{address}</Text>
    </Box>
  );
}

function App() {
  const [address, setAddress] = useState("");
  return (
    <div>
      <MyInput address={address} onChange={(text) => setAddress(text)} />
      <MyText address={address} />
    </div>
  );
}

export default App;
