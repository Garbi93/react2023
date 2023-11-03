import { Button } from "@chakra-ui/react";

function MyButton({ children, executeClick }) {
  return <Button onClick={executeClick}>{children}</Button>;
}

// 드개의 버튼 만들기
// 첫번째 버튼은 클릭하면 콘솔에 "hello"
// 두번째 버튼은 클릭하면 콘솔에 "greeting"

function App() {
  function func1() {
    console.log("hello");
  }
  function func2() {
    console.log("greeting");
  }
  return (
    <>
      <MyButton executeClick={func1} value={"hello"}>
        헬로
      </MyButton>
      <MyButton executeClick={func2} value={"hello"}>
        그리팅
      </MyButton>
    </>
  );
}

export default App;
