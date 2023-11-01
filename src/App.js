function App() {
  return (
    <>
      <MyComp value="흥민" address="신촌" />
      <MyComp value="강인" address="강남" />
    </>
  );
}

// {value:"흥민",address:"신촌"}
function MyComp({ value, address }) {
  // 바로 구조분해 할당하여 props를 분해해 주기
  // 메뉴얼에서는 props를 바로 사용하기 보단 구조분해할당 하여 사용해 주는것이 더 많았다.
  return (
    <div>
      <h1>
        {value}(은)는 {address}에 산다.
      </h1>
    </div>
  );
}

export default App;
