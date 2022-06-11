
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