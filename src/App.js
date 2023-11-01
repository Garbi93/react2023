function App() {
  return (
    <>
      <h1
        className="note"
        style={{ backgroundColor: "blue", color: "white" }}
        title="제목요소"
      >
        Lorem.
      </h1>
      <p title="문단요소">Lorem ipsum dolor.</p>
      <MyComp title="내 컴포넌트" name="흥민" />
      {/* 우리가 만든 컴포넌트는 호출했을때 title이 적용 안된다 */}
      <MyComp title="I am 컴포넌트에요" name="강인" />
    </>
  );
}

// 함수 인자로
// 사용한 곳에서 넘긴 property들이 객체형태로 담김
// 예) title="내 컴포넌트" => {title: "내 컴포넌트"}
// 예2) title="내 컴포넌트" name="흥민" => {title: "내 컴포넌트", name: "흥민"}
function MyComp(props) {
  console.log("MyComp가 받은 props", props);
  // property를 줄여서 props라고 부르기도 한다.
  return (
    <div>
      <h1 title={props.title}>hello {props.name}</h1>
      {/* 넘겨받은 property를 받아서 사용도 가능하다 */}
    </div>
  );
}

export default App;
