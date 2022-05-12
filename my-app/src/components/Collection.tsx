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


export const Collection = () => {
    //use the swag styles
    const classes = useStyles()


    //be able to login and logout
    const { user, setUserData } = useMoralis();



    //Save the collection address
    const [collection, setCollection] = useState<number | string | Array<number | string>>(0)
    const SaveCollection = () => {
        //add the way to save the collection address here
        console.log("Collection address saved:", collection)
    }

    //value={collection} onChange={(event) => setCollection(event.currentTarget.value)}

    return (
        <div className={classes.container}>
            <h3>Step 3: Enter the address of the NFT collection:</h3>
            <h5>Example: 0x52501402101515041504568</h5>
            <Input value={collection} onChange={(event) => setCollection(event.currentTarget.value)} />
            <Button color="primary" variant="contained" onClick={SaveCollection}> Save Collection address </Button>
        </div>
    );
}
