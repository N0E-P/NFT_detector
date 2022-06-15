Moralis.settings.setAPIRateLimit({
    anonymous: 10000, authenticated: 10000, windowMs: 60000
})

Moralis.Cloud.define("getAllUsers", async (request) => {
    const query = new Moralis.Query("User");
    const result = await query.find({ useMasterKey: true });
    const users = JSON.stringify(result);
    return users;
});


Moralis.Cloud.define("getUserAddress", async (request) => {
    return
});