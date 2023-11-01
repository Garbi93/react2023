// style 적용 방법
// 보통 css 파일 => 같은 이름의 class 를 사용 할 수도 있어서 module로 사용한다.
// css module 사용
// chakraUI css library

import { MyComp } from "./component/MyComp";
import { MyBox } from "./component/MyBox";
import { MyContainer } from "./component/MyContainer";

function App() {
  return (
    <>
      <MyComp />
      <MyBox />
      <MyContainer />
    </>
  );
}

export default App;
