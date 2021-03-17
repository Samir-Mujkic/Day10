var lion = {
  //Only change code below this line
  name: "Simba",
  legs: 4,
  tails: 1
};
function myFunction(propName, propValue) {
  lion[propName] = propValue;
  return lion;
}
myFunction("roar", "roar-roar");

//Only change code above this line
module.exports = myFunction;