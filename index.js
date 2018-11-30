var chalk = require("chalk");

var message = chalk.blue("Hello ") + chalk.yellow("World")
var message2 = chalk.red("This") + chalk.green(" is a test")
var message3 = chalk.white("Ths is also a test")
var message4 = chalk.bgCyanBright.magentaBright("THIS IS REALLY BRIGHT!!!!")



console.log(message, message2, message3, message4);



const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {bgMagenta ${calculateFeet(miles)} feet}.
`);