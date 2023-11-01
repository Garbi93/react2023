function MyElem({ name, age, team }) {
  return (
    <div style={{ border: "2px solid black", width: "300px" }}>
      <p style={{ color: "blue", fontWeight: "bold" }}>이름 은 {name}</p>
      <p>나이 는 {age}</p>
      <p>활동 팀 명은 {team}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex" }}>
      <MyElem name="흥민" age={44} team="토트넘" />
      <MyElem name="강인" age={33} team="파리" />
    </div>
  );
}

export default App;
