import { Box, Center, Circle, Square } from "@chakra-ui/react";
import { ChatIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"brown"} h={"200px"}>
        <Square bg={"skyblue"} w={"100px"} h={"100px"}>
          <ChatIcon />
        </Square>
      </Center>

      <Center bg={"olive"} h={"200px"}>
        <Circle bg={"skyblue"} w={"100px"} h={"100px"}>
          <PhoneIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
