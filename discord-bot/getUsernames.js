function main(collectionAddress) {
    return "Hello, " + collectionAddress + "!";
}



/*
import { useMoralis, useMoralisWeb3Api } from "react-moralis";


const Collection = () => {

    // To use the Moralis API and Moralis
    const Web3Api = useMoralisWeb3Api();
    const { Moralis } = useMoralis();


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

    }
}
*/