var myFood = {
  //Only change code below this line
  vegetable: "carrot",
  fruit: "orange",
  drink: "water"
};
function myFunction(myObj) {
  var vegetableValue = myObj["vegetable"];
  var fruitValue = myObj["fruit"];
  var drinkValue = myObj["drink"];

  return { vegetableValue, fruitValue, drinkValue };
}
//Only change code above this line
console.log(myFunction(myFood));
module.exports = myFunction(myFood);