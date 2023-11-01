import Box, { color as boxColor } from "./component/Box";
import Container, { color as containColor } from "./component/Container";
function App() {
  return (
    <div>
      <Box style={{ color: boxColor }} />
      <Container style={{ color: containColor }} />
    </div>
  );
}

export default App;
