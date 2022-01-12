'use strict';
const Sequelize = require('sequelize');
module.exports = sequelize.define("Department" ,{
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