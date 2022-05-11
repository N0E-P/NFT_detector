import React from 'react';
import { Header } from "./Header"
import { Container } from "@material-ui/core"

function App() {
  return (
    <div>
      <Container >
        <h1>Welcome to the Discord NFT detector!</h1>
      </Container>
      <Header />
      <Container maxWidth="md">
        <div>Hi! I am text</div>
      </Container>
    </div>
  );
}

export default App;