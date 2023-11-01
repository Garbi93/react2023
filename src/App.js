function App() {
  return (
    <>
      <MyComp name={"흥민"} address={"신촌"} age={33} city={"서울"} />
      <MyComp address={"강남"} age={22} city={"부산"} />
      <MyComp address={"강남"} city={"부산"} />
      <MyComp name="희찬" age={66} address="파리" city="프랑스" />
    </>
  );
}

function MyComp({ name = "*기본값 할당 가능*", address, age = 100, city }) {
  return (
    <div>
      <p>
        {name}은 {age}살 이고 {address}, {city}에 산다
      </p>
    </div>
  );
}

export default App;
