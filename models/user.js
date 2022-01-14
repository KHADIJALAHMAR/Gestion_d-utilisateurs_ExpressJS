
const Sequelize = require("sequelize");
const connexion = require('../config/database');

module.exports = connexion.define("user" ,{
  id : {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    validate:{
        notEmpty:true,
    }
},
  username :{
    type:Sequelize.STRING(49),
    allowNull :false ,
    unique :true ,
  },
  password :{
    type:Sequelize.STRING(33),
    allowNull :false ,
  },
});