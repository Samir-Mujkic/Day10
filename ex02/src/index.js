var myClothes = {
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
console.log(myFunction(myClothes));
module.exports = myFunction(myClothes);