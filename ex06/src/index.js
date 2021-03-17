var lion = {
  //Only change code below this line
  name: "Simba",
  legs: 4,
  tails: 1,
};
function myFunction(newparameter, secondparameter) {
  lion[newparameter] = secondparameter;
  return lion;
}
myFunction("roar");
console.log(myFunction("roar", "roar-roar"));
//Only change code above this line
module.exports = myFunction;