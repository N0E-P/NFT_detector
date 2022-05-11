import React, { useEffect, useState } from 'react';
import { useMoralis, useNewMoralisObject } from "react-moralis";
import { Button, makeStyles, Input } from "@material-ui/core"


//make this swag
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        display: "flex",
        justifyContent: "flex-end",
        gap: theme.spacing(1)
    }
}))


export const Main = () => {
    //use the swag styles
    const classes = useStyles()

    //be able to login and logout
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    //get the discord address from the Input space
    const [amount, setDiscord] = useState<number | string | Array<number | string>>(0)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const discord = event.currentTarget.value;
        setDiscord(discord)
        console.log(discord)
    }

    //login and assign the discord address to the wallet address
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

        //Link discord and wallet




    }

    //logout
    const logOut = async () => {
        await logout();
        console.log("logged out");
    }

    /*
    useEffect(() => {
        if (isAuthenticated) {
            // add your logic here
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);
    */

    return (
        <div className={classes.container}>
            <div>
                <Input
                    onChange={handleInputChange} />
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
