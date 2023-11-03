import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <>
      <Card color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}
function App(props) {
  return (
    <div>
      <MyBox color="skyblue" bg="gold">
        이건 children입니다.
      </MyBox>
    </div>
  );
}

export default App;
