import {
  MyBox,
  MyContainer,
  MyElem,
  name,
  address,
  person,
} from "./component/MyBox"; // import받는 component에서는 여러개를 받아오는것도 가능하다.

function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);

  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

export default App;
