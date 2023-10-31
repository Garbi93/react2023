function MyComp2() {
  let name = "손흥민";
  let age = 33;

  // {} : jsx 에서 js 코드 작성하기 위한 기호
  return (
    <>
      <h1>hello react</h1>
      <h1>hello {name}</h1>
      <h1>{age} years</h1>
      <h1>{age * 2} double years</h1>
      <h1>{name + "선수"}</h1>
      {/* 그래서 주석이 이렇게 생김 */}
    </>
  );
}

function App() {
  // jsx에서 태그 사용시 꼭 종료태그를 작성해야 함
  // 빈 요소이면 시작 태그에서 종료
  return (
    <div>
      <h1>hello react</h1>
      <h2>HI REACT</h2>
      <p>
        Lorem ipsum dolor.
        <br />
        Lorem ipsum dolor.
        {/*  이런식으로 시작 위치에 종료 태그를 넣어준다 */}
      </p>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

// built-in component는 소문자로 시작
// component 명은 대문자로 시작
// 우리가 작성한 component는 return문을 가져야함
// return 값은 보통 JSX 코드

function MyComp() {
  // return 에 jsx 코드 작성 가능
  // 꼭 하나의 root tag가 존재해야 함
  // 여러개의 root tag를 사용하려면 div 같은 태그로 감싸서 사용해야한다.
  // retrun 값이 여러줄이면 ()로 감싸기
  // root tag가 필요없다면 fragment 사용 가능 <></> 태그명이 없는 태그

  // jsx에서 주석 사용 법
  //{/* */} 이렇게 사용한다.
  return (
    <>
      {/* fragment 는 <> </> 로 구성된 빈 태그 */}
      <h1>HI COMPONENT</h1>
      <h2>hello</h2>
    </>
  );
}

export default App;
