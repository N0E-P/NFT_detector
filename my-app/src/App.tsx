import React from 'react';
import { Main } from "./components/Main"
import LinkDiscord from "../../mess/LinkDiscord"
import { Container } from "@material-ui/core"

function App() {
  return (
    <div>
      <Container>
        <h1>Welcome to the Discord NFT detector!</h1>
      </Container>

      <Container maxWidth="md">
        <Main />
      </Container>
    </div>
  );
}

export default App;