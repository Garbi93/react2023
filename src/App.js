import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={2}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Officia?</Box>
        <Box bg={"gray"}>Quia.</Box>
        <Box bg={"blue"}>Ipsam?</Box>
        <Box bg={"green"}>Repudiandae!</Box>
      </Flex>
    </>
  );
}

export default App;
