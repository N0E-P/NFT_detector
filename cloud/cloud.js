Moralis.settings.setAPIRateLimit({
    anonymous: 10000, authenticated: 10000, windowMs: 60000
})


Moralis.Cloud.define("getAllUsers", async () => {
    var query = new Moralis.Query("User");
    var result = await query.find({ useMasterKey: true });
    var allUsers = JSON.stringify(result);
    return allUsers;
});


Moralis.Cloud.define("getUserAddress", async (userName) => {
    //var userNameString = userName.toString();


    //var userNameString = "Skaskaa"; //Fonctionne, mais c'est pas le but
    //var userNameString = JSON.stringify(userName); //Donne un fichier JSON lisible dans le terminal

    var userNameString = JSON.parse(userName); //Donne un fichier JSON lisible dans le terminal

    return userNameString


    /*
    var query = new Moralis.Query("User");
    query.equalTo("username", userNameString);
    // .startsWith
    var result = await query.find({ useMasterKey: true });
    var JSONUserAddress = result[0]
    var userAddress = JSONUserAddress.get("ethAddress");
    //return userAddress
    */

});