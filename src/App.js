function MyHeader(props) {
  return (
    <div style={{ color: props.color, backgroundColor: props.bg }}>
      <div>
        <h1>{props.text}</h1>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyHeader color="white" bg="black" text="내가 만든 제목" />
      <MyHeader color="orange" bg="skyblue" text="다시 만든 제목" />
      {/*  
      <div style=color:"white"; bg:"black">
        <h1>내가 만든 제목 </h1>
      </div>
      <div style=color:"orange"; bg:"skyblue">
        <h1>다시 만든 제목 </h1>
      </div>
    */}
    </div>
  );
}

export default App;
