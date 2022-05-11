import React from 'react';
import { Discord } from "./components/Discord"
import { Metamask } from "./components/Metamask"
import { Box } from "@material-ui/core"

function App() {
  return (
    <div>
      <Box>
        <h1 >Welcome to the Discord NFT detector!</h1>
      </Box>
      <Box>
        <Metamask />
      </Box>
      <Box>
        <Discord />
      </Box>
    </div>
  );
}

export default App;