import { Box, List, ListItem } from "@chakra-ui/react";

function App() {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));

  const arr2 = ["손흥민", "이강인", "김민재"];
  // const players = arr2.map((e) => <ListItem>{e}</ListItem>);

  const arr3 = ["라떼", "카푸치노", "믹스커피"];

  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "에스프레소" },
    { id: 2, name: "카푸치노" },
  ];
  return (
    <div>
      <Box mb={3}>
        <List>{listItems}</List>
      </Box>
      <Box>
        <List mb={3}>
          {arr2.map((e, index) => (
            <ListItem key={index}>{e}</ListItem>
          ))}
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {arr3.map((x, i) => (
            <ListItem key={i}>{x}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
