import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Alias, soluta?
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Cumque, quasi.
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        Quos, totam.
      </Box>
      <Box borderY={"10px dotted"} borderColor={"pink.200"}>
        Autem, doloremque.
      </Box>
      <Box border={"5px solid blue"} borderRadius={"15px"}>
        Nesciunt, tenetur?
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Odio, sed!
      </Box>
      <Box border={"5px solid black"} borderRadius={10}>
        Minima, repellendus?
      </Box>
      <Box border={"5px solid blue"} borderTopRightRadius={10}>
        Doloribus, quae.
      </Box>
      <Box border={"5px solid green"} borderTopLeftRadius={10}>
        Quos, vero?
      </Box>
      <Box border={"5px solid purple"} borderBottomLeftRadius={10}>
        Esse, quidem!
      </Box>
      <Box border={"5px solid red"} borderBottomRightRadius={10}>
        Quas, ratione.
      </Box>
      <Box border={"5px solid skyblue"}>Excepturi, vitae?</Box>
      <Box shadow={"10px 5px 5px red"}>Amet, sed.</Box>
      <Box shadow="lg">Est, vero?</Box>
      <Box shadow="xl">Cum, neque?</Box>
      <Box shadow="md">Sit, totam.</Box>
      <Box bg={"blue.300"} m={"10px"}>
        Reiciendis, tenetur.
      </Box>
      <Box bg={"yellow.600"} m={"20px"}>
        Aut, molestiae!
      </Box>
      <Box bg={"facebook.500"} mx={"70px"}>
        Hic, rerum?
      </Box>
      <Box bg="red.300" my="10px">
        Lorem ipsum.
      </Box>
      <hr />
      <Box bg="red.600" m="1">
        Lorem ipsum.
      </Box>
      <Box bg="blue.300" m="2">
        Incidunt, nihil.
      </Box>
      <Box bg="yellow.200" m="3">
        Culpa, officiis.
      </Box>
      <Box bg="gray.400" m="4">
        Soluta, velit.
      </Box>
      <Box bg="gold" m="5">
        Dolorum, saepe!
      </Box>

      <hr />

      <Box bg="red.400" p={"10px"}>
        Lorem ipsum.
      </Box>
      <Box bg="blue.400" px={"20px"}>
        Fugiat, suscipit.
      </Box>
      <Box bg="purple.400" py={"30px"}>
        Debitis, unde.
      </Box>
      <Box bg="gold" pl={"20px"}>
        Consequuntur, illum.
      </Box>
      <Box bg="tomato" p={1}>
        Sit, tenetur!
      </Box>
      <Box bg="silver" p={2}>
        Animi, ducimus!
      </Box>
      <Box bg="brown" p={3}>
        Ducimus, voluptas.
      </Box>
      <Box bg="violet" pd={"50px"}>
        Incidunt, nostrum?
      </Box>
      <Box bg="green" pr={"100px"}>
        Commodi, magni!
      </Box>
      <Box bg="skyblue">Ipsam, natus!</Box>

      <div
        style={{
          margin: "10px",
          backgroundColor: "gold",
          boxShadow: "10px 5px 5px red",
        }}
      >
        Lorem ipsum.
      </div>
    </>
  );
}

export default App;
