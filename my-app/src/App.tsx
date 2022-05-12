import React from 'react';
import { Discord } from "./components/Discord"
import { Metamask } from "./components/Metamask"
import { Collection } from "./components/Collection"
import { Box, Container } from "@material-ui/core"

function App() {
  return (
    <div>
      <Container>
        <h1 >Welcome to the Discord NFT detector!</h1>
      </Container>
      <Box>
        <Metamask />
      </Box>
      <Box>
        <Discord />
      </Box>
      <Box>
        <Collection />
      </Box>
    </div>
  );
}

export default App;