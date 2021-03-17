var myPet = {
  //Only change code below this line
  species: "Doberman",
  name: "Lesi",
  legs: 10,
  friends: ["Rex", "Suzi"]

};
function myfunction(myObj) {
  return myObj;
}
//Only change code above this line
console.log(myfunction(myPet));
module.exports = { myPet, myfunction };
