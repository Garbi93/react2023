// 우연히 임포트한 명이 동일할 때에는 어떻게 될까??
// 내가 만든 파일이 아니라면 별칭을 부여 할 수 있다
import MyBox, { address } from "./component/MyBox";
import MyElem, { address as myAddress } from "./component/MyElem";

// as로 named export 값을 import할 때 별칭을 줄 수 있음
// 같은 별칭을 사용할때에 오류를 해결 하기 위해

function App() {
  return (
    <>
      <h1>{address}</h1>
      <h1>{myAddress}</h1>
      <MyElem />
      <MyBox />
    </>
  );
}

export default App;
