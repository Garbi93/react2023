function App() {
  return (
    <div>
      <MyBox
        p="10px"
        m="10px"
        bg="skyblue"
        color="brown"
        text="이게 바로props입니다."
      />
    </div>
  );
}

function MyBox({ p, m, bg, color, text }) {
  return (
    <div
      style={{
        padding: p,
        margin: m,
        color: color,
        backgroundColor: bg,
        fontWeight: "bold",
        fontSize: "1.2rem",
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default App;
