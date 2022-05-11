import React, { useState } from 'react';
import { useMoralis, } from "react-moralis";
import { Button, makeStyles, Input } from "@material-ui/core"


//make this swag
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(1)
    }
}))


export const Discord = () => {
    //use the swag styles
    const classes = useStyles()


    //be able to login and logout
    const { user, setUserData } = useMoralis();


    //Save the discord username
    const [username, setUsername] = useState(user?.attributes.username);
    const handleSave = () => {
        setUserData({
            username
        })
    }


    return (
        <div className={classes.container}>
            <h3>Step 2: Enter your full Discord username:</h3>
            <h5>Example: Giraphe#5480</h5>
            <Input value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
            <Button color="primary" variant="contained" onClick={handleSave}> Save Discord Username </Button>
        </div>
    );
}
