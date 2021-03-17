var myClothes = {
  //Only change code below this line
  hat: "Fedora",
  shirt: "Nike",
  shoes: "Converse",
};
function myFunction(myObj) {
  var hat = myObj.hat;
  var shirt = myObj.shirt;
  var shoes = myObj.shoes;
  
  return { hat, shirt, shoes };
}
//Only change code above this line
console.log(myFunction(myClothes));
module.exports = myFunction(myClothes);