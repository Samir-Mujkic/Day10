function myFunction(propName) {
  //Only change code below this line
  var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar",
  };
  delete lion[propName];
  return lion;
}
myFunction("roar");
console.log(myFunction("roar"));
//Only change code above this line
module.exports = myFunction;