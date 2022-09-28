'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    
    static associate(models) {
      this.hasOne(models.AlunoNota,{foreignKey: "materia_id"})
    }
  }
  Materia.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia;
};