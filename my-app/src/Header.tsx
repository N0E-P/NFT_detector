import React, { useEffect } from 'react';
import { useMoralis } from "react-moralis";
import { Button, makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        display: "flex",
        justifyContent: "flex-end",
        gap: theme.spacing(1)
    }
}))


export const Header = () => {
    const classes = useStyles()

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();


    const login = async () => {
        if (!isAuthenticated) {

            await authenticate({ signingMessage: "Login in" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user!.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }


    const logOut = async () => {
        await logout();
        console.log("logged out");
    }


    return (
        <div className={classes.container}>
            <div>
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
        </div>
    );
}
