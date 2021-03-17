//Only change code below this line
function myFunction() {
  var myMusic = {
    001: {
      artist: "50 Cent",
      title: "Trap",
      release_year: 1991,
      id: 0501,
      formats: {
        1: "Many man",
        2: "Idemo",
        3: "Kada"
      },
      gold: true

    },
    002: {
      artist: "Diddy",
      title: "Victory",
      release_year: 1996,
      id: 0502,
      formats: {
        1: "Kesh",
        2: "Many",
        3: "Sell"
      },
      gold: false
    }
  };
  return myMusic;
}
myFunction()[2];
//Only change code above this line
console.log(myFunction()[2]);

module.exports = myFunction;