import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  // response 반응형 웹 크기 마다 선배님들이 사이즈를 지정해줬었다.
  //   base: "0em", // 0px
  //   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  //   md: "48em", // ~768px
  //   lg: "62em", // ~992px
  //   xl: "80em", // ~1280px
  //   "2xl": "96em", // ~1536px
  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ base: 2, md: 3 }}>
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Ab?</Box>
        <Box bg="blue.300">Maiores?</Box>
        <Box bg="blue.300">Quidem?</Box>
        <Box bg="blue.300">Nisi.</Box>
        <Box bg="blue.300">Ipsam?</Box>
        <Box bg="blue.300">Iusto!</Box>
        <Box bg="blue.300">Possimus?</Box>
        <Box bg="blue.300">Error!</Box>
        <Box bg="blue.300">Doloribus.</Box>
        <Box bg="blue.300">Cum!</Box>
        <Box bg="blue.300">Architecto.</Box>
        <Box bg="blue.300">Magni?</Box>
        <Box bg="blue.300">Expedita?</Box>
        <Box bg="blue.300">Repellat?</Box>
        <Box bg="blue.300">Laboriosam?</Box>
        <Box bg="blue.300">Earum?</Box>
        <Box bg="blue.300">Doloribus!</Box>
        <Box bg="blue.300">Quaerat!</Box>
        <Box bg="blue.300">Expedita?</Box>
        <Box bg="blue.300">Consequuntur.</Box>
        <Box bg="blue.300">Suscipit.</Box>
        <Box bg="blue.300">Quam.</Box>
        <Box bg="blue.300">Vel?</Box>
        <Box bg="blue.300">Fuga?</Box>
        <Box bg="blue.300">Temporibus?</Box>
        <Box bg="blue.300">Assumenda.</Box>
        <Box bg="blue.300">Fuga!</Box>
        <Box bg="blue.300">Dicta!</Box>
        <Box bg="blue.300">Voluptate?</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
