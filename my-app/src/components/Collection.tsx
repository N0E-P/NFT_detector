import React, { useState } from 'react';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
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


    // To use the Moralis API and Moralis
    const Web3Api = useMoralisWeb3Api();
    const { Moralis } = useMoralis();


    //Get the collection address via the Input box
    const [collection, setCollection] = useState("");


    //Get all the owners, save it on the Moralis database, create a .json file with all the validated discord names
    const SaveCollection = async () => {
        // Find NFT owners
        const options = { address: collection, };
        const nftOwners = await Web3Api.token.getNFTOwners(options);
        console.log("NFT owners found:", nftOwners);


        // Save the NFT owners in the Moralis Database
        const Address = Moralis.Object.extend("CollectionsAddresses");
        const newAddress = new Address();
        newAddress.set("Name", collection);
        newAddress.set("Data", nftOwners);
        await newAddress.save();
        console.log("Collection address saved:", collection)


        // Create the .json File
        console.log("Creating the .json file...")
        //accéder au fichier de la collection
        //regarder pour chaque wallet du fichier si on a enregistré un user avec le même wallet      OU       d'abord faire un fichier UNIQUEMENT avec les wallets, puis chercher les pseudo discord à partir de ça
        //       Si non : 
        //                continuer de tout regarder en boucle
        //       Si oui : 
        //                prendre son pseudo discord
        //                l'ajouter un fichier .json qui correspond avec l'addresse de la collection
        //                sauvegarder le fichier dans la database


        console.log("All done! You can close this tab!")
    }



    // front end
    return (
        <div className={classes.container}>
            <h3>Step 3 (For admins only): Enter the address of the NFT collection:</h3>
            <h5>Example: 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB</h5>
            <Input value={collection} onChange={(event) => setCollection(event.currentTarget.value)} />
            <Button color="primary" variant="contained" onClick={SaveCollection}> Save the collection address </Button>
        </div>
    );
}
