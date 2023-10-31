function App() {
  const name = "흥민";
  return (
    <>
      <h1>이름은 {name}</h1>
      <h1>이름은 {"강인"}</h1>
      <h1>이름은 희찬</h1>

      <div className={"error"}>Lorem ipsum dolor.</div>
      <div className="error">Lorem ipsum dolor.</div>
      {/* 위에 두중중 윗줄이나 아랫줄이나 같은 일을 한다. */}
    </>
  );
}

export default App;
