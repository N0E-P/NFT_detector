import React, { useState } from 'react';
import { useMoralisWeb3Api } from "react-moralis";
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


    // To use the Moralis API
    const Web3Api = useMoralisWeb3Api();


    //Get the collection address via the Input box
    const [collection, setCollection] = useState("");


    //Save the collection address
    const SaveCollection = async () => {
        const options = { address: collection, };
        const nftOwners = await Web3Api.token.getNFTOwners(options);
        console.log(nftOwners);
        console.log("Collection address saved:", collection)
    }


    // front end
    return (
        <div className={classes.container}>
            <h3>Step 3 (For admins only): Enter the address of the NFT collection:</h3>
            <h5>Example: 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB</h5>
            <Input value={collection} onChange={(event) => setCollection(event.currentTarget.value)} />
            <Button color="primary" variant="contained" onClick={SaveCollection}> Save Collection address </Button>
        </div>
    );
}
