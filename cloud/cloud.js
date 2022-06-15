Moralis.Cloud.define("hola", async (request) => {
    return "Hello world!";
});


Moralis.Cloud.define("getUsers", async (request) => {
    const query = new Moralis.Query("User");
    const result = await query.find({ useMasterKey: true });
    const users = JSON.stringify(result);
    return users;
});
