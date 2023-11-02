import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
            <FormHelperText>이름을 한글로만 입력하세요</FormHelperText>
          </FormControl>
        </Box>
      </Center>
      <Center mt={5}>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>하나만 선택하세요.</FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">lorem.</Radio>
                <Radio value="value2">Lorem.</Radio>
                <Radio value="value3">Dignissimos.</Radio>
                <Radio value="value4">Nobis.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>
      <Center>
        <Box>
          <FormControl>
            <CheckboxGroup>
              <Flex gap={5}>
                <Checkbox colorScheme="orange">Lorem.</Checkbox>
                <Checkbox colorScheme="green">Repellendus?</Checkbox>
                <Checkbox colorScheme="blue">Qui.</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;
