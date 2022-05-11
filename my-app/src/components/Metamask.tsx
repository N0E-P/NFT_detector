import React from 'react';
import { useMoralis, } from "react-moralis";
import { Button, makeStyles } from "@material-ui/core"


//make this swag
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        display: "flex",
        justifyContent: "flex-end",
        gap: theme.spacing(1)
    }
}))


export const Metamask = () => {
    //use the swag styles
    const classes = useStyles()


    //be able to login and logout
    const { authenticate, isAuthenticated, isAuthenticating, logout } = useMoralis();


    //login and assign the discord address to the user
    const login = async () => {
        //Login
        if (!isAuthenticated) {

            await authenticate({ signingMessage: "Login in" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user!.get("ethAddress"));
                    const wallet = user!.get("ethAddress")
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }


    //logout
    const logOut = async () => {
        await logout();
        console.log("logged out");
    }


    return (
        <div className={classes.container}>
            <h3>Step 1: Connect your wallet, and follow the steps on metamask :</h3>
            <h5>Click on the 3 blue buttons that will appear</h5>
            {isAuthenticated ? (
                <Button color="default" variant="contained" onClick={logOut} disabled={isAuthenticating}>
                    Disconnect 🦊
                </Button>
            ) : (
                <Button color="primary" variant="contained" onClick={login}>
                    Connect 🦊
                </Button>
            )
            }
        </div>
    );
}
