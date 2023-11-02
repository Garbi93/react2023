import { Box, FormControl, Select } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요" multiple h={"120px"}>
            <option value="value1">Lorem.</option>
            <option value="value2">Eum.</option>
            <option value="value3">Quia!</option>
            <option value="value4">Atque.</option>
            <option value="value5">Et.</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
