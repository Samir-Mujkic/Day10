

 var players = {
  //Only write code below this line
  7: "Muhamed Besic",
  10: "Mirelem Pjanic",
  11: "Edin Dzeko",
};
function myfunction(myObj) {
  var playerNumber = 10;
  var player = myObj[playerNumber];




  return player;
}
console.log(myfunction(players));
//Only write code above this line
module.exports = { players, myfunction };
