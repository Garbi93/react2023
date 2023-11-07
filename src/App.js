import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { useImmer } from "use-immer";
import { Box, Input, Text } from "@chakra-ui/react";

function NameInput({ message, onChange }) {
  return (
    <Box>
      <Input
        value={message}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </Box>
  );
}

function AddressInput({ message, onChange }) {
  return null;
}

function MyText({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function App() {
  const [message, setMessage] = useImmer({ name: "son", address: "seoul" });

  function handleNameOnChange(text) {
    setMessage(text);
  }

  function handleAddressOnChange(text) {
    setMessage(text);
  }

  return (
    <div>
      <NameInput message={message} onChange={handleNameOnChange} />
      <AddressInput message={message} onChange={handleAddressOnChange} />
      <MyText message={message} />
    </div>
  );
}

export default App;
