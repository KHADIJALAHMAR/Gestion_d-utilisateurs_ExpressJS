
const Sequelize = require('sequelize');
const connexion = require('../config/database');
module.exports = connexion.define('Department',{
  
  id:{
    type:Sequelize.INTEGER(11),
    allowNull :false ,
    autoIncremant :true ,
    primaryKey :true,
  },
  name :{
    type:Sequelize.STRING(60),
    allowNull :false ,
  },
  descreption :{
    type:Sequelize.STRING(255),
    allowNull :false ,
  },

});