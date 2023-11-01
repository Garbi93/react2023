function MyComp({
  m = "30px",
  p = "20px",
  color = "brown",
  bg = "skyblue",
  text = "빈 컴포넌트가 되어버렸어...",
}) {
  return (
    <div
      style={{
        padding: p,
        margin: m,
        color: color,
        backgroundColor: bg,
        fontWeight: "bold",
        fontSize: "1.3rem",
      }}
    >
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComp m="30px" p="10px" color="gold" bg="black" text="hello react" />
      <MyComp m="30px" p="10px" color="gold" bg="black" />
      <MyComp m="30px" bg="black" text="hello react" />
      <MyComp p="10px" color="gold" text="hello react" />
    </div>
  );
}

export default App;
