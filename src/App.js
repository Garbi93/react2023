function App() {
  return (
    <div style={{ display: "flex" }}>
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const name = "흥민";
  return <div>{name}</div>;
}

export default App;
