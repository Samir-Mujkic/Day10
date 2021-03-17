

players = {
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
module.exports = { players, myfunction };
