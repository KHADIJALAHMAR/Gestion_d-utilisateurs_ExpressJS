'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Create_Table_Fk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Create_Table_Fk.init({
    tag_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Create_Table_Fk',
  });
  return Create_Table_Fk;
};