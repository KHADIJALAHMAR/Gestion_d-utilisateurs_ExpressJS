'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("Departments" , {
      id: {
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name :{
        type:Sequelize.STRING(60),
        allowNull :false ,
      },

      descreption :{
        type:Sequelize.STRING(255),
        allowNull :false ,
      },
      

    })
  },

  down: async (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable("Departments");
  
  }
};
