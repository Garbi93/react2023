import { Box, Flex, FormControl, FormLabel, Switch } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box>
        <FormControl display={"flex"} alignItems={"center"}>
          <FormLabel mb={0}>알림을 받으시겠습니까??</FormLabel>
          <Switch size={"lg"} colorScheme="orange" />
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
