var school = {
  //Only change code below this line
  name: "Arena",
  location: "Sarajevo",
  established: "2020"
};
function myFunction(name) {
  school.name = name;
  return school;
}
myFunction("Paragon");
console.log(myFunction("Paragon"));
//Only change code above this line

module.exports = { school, myFunction };


