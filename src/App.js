import { Button } from "@chakra-ui/react";

function MyComp({ children, executeClick }) {
  return (
    <div>
      <Button onClick={executeClick}>{children}</Button>
    </div>
  );
}

function App() {
  function func1() {
    console.log("func1 실행");
  }

  let func2 = () => {
    console.log("arrow function 실행 111");
  };

  return (
    <div>
      <MyComp executeClick={func1}>Button1</MyComp>
      <MyComp executeClick={func2}>Button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("arrow function 직접 넣어서 실행 2222");
        }}
      >
        Button3
      </MyComp>
      <MyComp
        executeClick={() => console.log("한줄일때 중괄호 생략해서 출력3333")}
      >
        Button4
      </MyComp>
    </div>
  );
}

export default App;
