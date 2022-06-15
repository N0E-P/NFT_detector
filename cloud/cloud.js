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
    //var userNameString = "Skaskaa";
    var userNameString = JSON.stringify(userName);

    var query = new Moralis.Query("User");
    query.startsWith("username", userNameString);
    var result = await query.find({ useMasterKey: true });
    var JSONUserAddress = result[0]
    var userAddress = JSONUserAddress.get("ethAddress");
    return userAddress
});