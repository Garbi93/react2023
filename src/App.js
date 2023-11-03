function MyComp({ text, address, children }) {
  return (
    <>
      <p>{text}</p>
      <p>{address}</p>
      <p>{children}</p>
    </>
  );
}

function App() {
  return (
    <div>
      <MyComp text={"hello"} address={"seoul"}>
        some contents, 다른 컴포넌트가 있을 수도 있음.
        {/* 내부에 들어있는 content들은 children 으로 받을 수 있다. */}
      </MyComp>
    </div>
  );
}

export default App;
