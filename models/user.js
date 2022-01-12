
const Sequelize = require("sequelize");



module.exports = sequelize.define("user" ,{
  id:{
    type:Sequelize.INTEGER(11),
    allowNull :false ,
    autoIncremant :true ,
    primaryKey :true,
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