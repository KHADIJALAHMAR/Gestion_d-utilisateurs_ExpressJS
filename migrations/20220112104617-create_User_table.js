'use strict';

module.exports = {

   up:(queryInterface ,Sequelize)=>{
     return queryInterface.createTable("Users" , {
      id: {
        type:Sequelize.INTEGER(12),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      createdAt :Sequelize.DATE,
      updatedAt :Sequelize.DATE,
    });
},

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("Users")
  }
};
