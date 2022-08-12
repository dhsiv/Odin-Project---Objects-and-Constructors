const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {
    console.log("obnoxiousProperty object function");
  },
};

/* One of the simplest ways to organize your code
 * is by grouping things into objects
 * Tic Tac Toe example below
 */
// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

// with constructor you will have to remember variable name
// each time you want to print it and console.log it
function printName(player) {
  console.log(playerOneName);
  console.log(playerTwoName);
}

printName();

// What if you don't know which player's name you want
// to print out?

function gameOver(winningPlayer) {
  console.log("Congratulations!");
  console.log(winningPlayer.name + "is the winner!");
}

// Object constructor function
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Call it with the keyword new
const player = new Player("steve", "X");
console.log(player.name); // steve

// You can add functions to it just like object literal method
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

//-------------------------------------------------//

// Object.create()

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output "My name is Matthew. Am I human? true"
