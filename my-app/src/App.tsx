import React from 'react';
import { Discord } from "./Discord"
import { Metamask } from "./Metamask"
import { makeStyles } from "@material-ui/core"


//make the app swag
const useStyles = makeStyles((theme) => ({
  app: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    color: theme.palette.common.white,
    texteAlign: "center",
    padding: theme.spacing(4),
  },

  container: {
    backgroundColor: "white",
    borderRadius: "40px",
    padding: theme.spacing(5),
    alignItems: "center",
  },
}))


function App() {
  // use the swag styles
  const classes = useStyles()


  return (
    <div className={classes.app}>
      <h1 className={classes.title}>
        Welcome to the Discord NFT Detector!
      </h1>
      <div className={classes.container}>
        <Metamask />
        <Discord />
      </div>
    </div>
  );
}


export default App;