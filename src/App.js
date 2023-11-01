function App() {
  return (
    <div>
      <MyText
        value={"내가만든 props"}
        style={{
          color: "skyblue",
          backgroundColor: "orange",
        }}
        title={"신기하네"}
      />
    </div>
  );
}

function MyText(props) {
  return (
    <div style={props.style} title={props.title}>
      <p>{props.value}</p>
    </div>
  );
}

export default App;
