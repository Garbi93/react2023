import { Box, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box>
        <FormControl>
          <FormLabel>본문</FormLabel>
          <Textarea
            placeholder="텍스트를 입력하세요."
            h={"400px"}
            w={"300px"}
          ></Textarea>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
