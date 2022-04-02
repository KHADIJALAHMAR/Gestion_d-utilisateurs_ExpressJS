const Department = require("./department");
const User = require("./user");
const connexion = require("../config/database");

// association
Department.hasMany(User);
User.belongsTo(Department);

console.log("hello");

// Create table of model
connexion.sync({ force: true}).then(() => {
  console.log("Table Created !");
});

module.exports = {
  Department,
  User,
};
// développement	est le contenu du texte, la section qui contient toutes les 
// RH	La fonction Ressources humaines a pour mission de faire en sorte que l’organisation dispose du personnel


console.log('hello ');