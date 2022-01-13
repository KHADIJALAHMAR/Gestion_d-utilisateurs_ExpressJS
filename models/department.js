
const Sequelize = require('sequelize');
const connexion = require('../config/database');
module.exports = connexion.define('Department',{
  
  id : {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    validate:{
        notEmpty:true,
    }
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