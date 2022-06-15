const { Moralis } = require('moralis/node')
const serverUrl = "https://zxhf5v44ppmy.usemoralis.com:2053/server";
const appId = "FhT4qqcXkx6s4d6fBGWoLyEi10twqx3uarr8eLEP";
Moralis.start({ serverUrl, appId });
//////////////////////////////////////////////////////////////////////////////////////////////
console.log("test starting... ");


//const Address = Moralis.Object.extend("CollectionsAddresses");

async function usequery() {
    const query = new Moralis.Query("CollectionsAddresses");
    //query.startsWith("blockchain", "eth");
    const results = await query.find();
    console.log("results: " + results);
    console.log("results.length: " + results.length);
    return

}
usequery();




/*
const users = Moralis.User.extend("_User");

//var discordUsername = "Giraphe#5480"

const query = new Moralis.Query(users);
//query.startsWith("username", discordUsername);
query.equalTo("username", "Giraphe#5480");

async function usequery() {
    const results = await query.find();
    console.log(results);
    console.log(results.length);
}
usequery();






// Do something with the returned Moralis.Object values
for (let i = 0; i < results.length; i++) {
  const object = results[i];
  alert(object.id + " - " + object.get("ownerName"));
}






const results = await query.find();

console.log("Successfully retrieved " + results.length + " monsters.");

// Do something with the returned Moralis.Object values

for (let i = 0; i < results.length; i++) {
    const object = results[i];
    console.log(object.id + " - " + object.get("ownerName"));
}
*/