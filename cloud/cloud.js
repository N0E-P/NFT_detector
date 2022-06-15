Moralis.Cloud.define("getAllUsers", async (request) => {
    const query = new Moralis.Query("User");
    const result = await query.find({ useMasterKey: true });
    const users = JSON.stringify(result);
    return users;
});