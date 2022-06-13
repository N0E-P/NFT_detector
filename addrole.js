


function addRole(server) {
  console.log("AddRole function starting..."+ server)
  setTimeout(addRole, 60000*0.5); //Chose the time to repeat in minutes
}


module.exports = addRole




/*
server = client.guilds.cache.get("the guild id");
console.log(the guild id)



//Get the owners:
const options = {chain: blockchain, address: address,};
let objectOwners = await Moralis.Web3API.token.getNFTOwners(options);
let stringOwners
let allOwners = ""
while (objectOwners.next){
  objectOwners = await objectOwners.next()
  stringOwners = JSON.stringify(objectOwners)
  allOwners = allOwners + stringOwners
}


newAddress.set("Data", allOwners);
*/