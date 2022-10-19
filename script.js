const newObjet = require("./information");
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `I'm ${newObjet.monNom} from ${newObjet.monCampus}`,
    e: "O^",
    T: "U ",
  })
);
