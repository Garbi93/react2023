import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // console.log(username);
  // console.log(email);

  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <Box>
        <Input
          text="text"
          value={username}
          onChange={handleUserNameChange}
        ></Input>
        <Input text="text" value={email} onChange={handleEmailChange}></Input>
      </Box>
      <Text>
        {username} 의 email은 {email}입니다. 주소는 {address} 입니다.
      </Text>
      <Box>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
    </div>
  );
}

export default App;
