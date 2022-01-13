const Department = require("./department");
const User = require("./user");
const connexion = require("../config/database");

// association
Department.hasMany(User);
User.belongsTo(Department);

console.log("hello");

// Create table of model
connexion.sync({ force: true }).then(() => {
  console.log("Table Created !");
});

module.exports = {
  Department,
  User,
};
