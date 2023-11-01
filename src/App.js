import aaggee, { city } from "./component/MyElem";
// default로 export한 것은 한개만 받아오면 된다. 그래서 아무거나 써도 export 한것이 잘 들어온다. // import할때에도 이름을 맞춰줘야한다
import Min, { country, person } from "./component/MyBox";

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{aaggee}</h1>
      <Min />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
