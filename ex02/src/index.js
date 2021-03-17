var myClothes = {
  //Only change code below this line
  hat: "Fedora",
  shirt: "Nike",
  shoes: "Converse"
};
function myFunction(myObj) {
  var hatvalue = myObj.hat;
  var shirtvalue = myObj.shirt;
  var shoesvalue = myObj.shoes;
  
  return { hatvalue, shirtvalue, shoesvalue };
}
//Only change code above this line
console.log(myFunction(myClothes));
module.exports = myFunction(myClothes);