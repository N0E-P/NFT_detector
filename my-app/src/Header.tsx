import React, { useEffect } from 'react';
import { useMoralis } from "react-moralis";

export const Header = () => {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
        if (isAuthenticated) {
            // add your logic here
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);


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
        <div>
            {isAuthenticated ? (
                <button onClick={logOut} disabled={isAuthenticating}>
                    Disconnect 🦊
                </button>
            ) : (
                <button onClick={login}>
                    Connect 🦊
                </button>
            )
            }
        </div>
    );
}
