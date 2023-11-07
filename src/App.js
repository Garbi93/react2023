import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

function CComp({ message }) {
  return <Text>{message}</Text>;
}

function AComp({ message }) {
  return <CComp message={message} />;
}

function DComp({ message, onChange }) {
  return <Input value={message} onChange={onChange} />;
}

function BComp({ message, onChange }) {
  return <DComp message={message} onChange={onChange} />;
}

function App(props) {
  const [message, setMessage] = useState("텍스트를 입력해 주세요");
  return (
    <div>
      <AComp message={message} />
      <BComp message={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
}

export default App;
