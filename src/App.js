import { Button } from "@chakra-ui/react";

function App() {
  let func2 = () => console.log("second");
  return (
    <>
      {/*첫번째 버튼 클릭시 "first" 콘솔에 출력*/}
      <Button onClick={() => console.log("first")}>Lorem.</Button>

      {/*두번째 버튼 클릭시 "second" 콘솔에 출력*/}
      <Button onClick={func2}>Lorem ipsum.</Button>
    </>
  );
}

export default App;
