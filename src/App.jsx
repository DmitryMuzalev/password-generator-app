import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Password } from "./components/Password/Password";
import { Generator } from "./components/Generator/Generator";
import { Length } from "./components/Length/Length";
import { Settings } from "./components/Settings/Settings";
import { Strength } from "./components/Strength/Strength";
import { Button } from "./components/Button/Button";
import { ContextApp } from "./Context";

function App() {
  return (
    <ContextApp>
      <Container>
        <Header>password generator</Header>
        <Password />
        <Generator>
          <Length />
          <Settings />
          <Strength />
          <Button />
        </Generator>
      </Container>
    </ContextApp>
  );
}

export default App;
