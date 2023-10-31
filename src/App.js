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
  return (
    <>
      <div style={{ backgroundColor: "skyblue", marginLeft: "5px" }}>
        {name}
      </div>
    </>
  );
}

export default App;
