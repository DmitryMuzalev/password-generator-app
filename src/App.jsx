import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Password } from "./components/Password/Password";
import { Generator } from "./components/Generator/Generator";
import { Length } from "./components/Length/Length";
import { Settings } from "./components/Settings/Settings";

function App() {
  return (
    <Container>
      <Header>password generator</Header>
      <Password />
      <Generator>
        <Length />
        <Settings />
      </Generator>
    </Container>
  );
}

export default App;
