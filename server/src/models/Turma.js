'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    
    static associate(models) {
      this.belongsTo(models.Aluno,{foreignKey:"aluno_id"});
      this.hasOne(models.AlunoNota,{foreignKey: "turma_id"})
    }
  }
  Turma.init({
    aluno_id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    horario: DataTypes.TIME,
    ano: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Turma',
  });
  return Turma;
};