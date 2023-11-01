import {
  MyElem,
  MyNavBar,
  MyContent,
  country,
  text,
  value,
} from "./component/MyElem";

function App() {
  // country , txt value MyElem MyNavBar MyContent
  // 를 하나의 파일 에 작성하고 export하기
  return (
    <div>
      <p>{country}</p>
      <p>{text}</p>
      <p>
        {value.who} , {value.subject}
      </p>
      <MyElem />
      <MyNavBar />
      <MyContent />
    </div>
  );
}

export default App;
