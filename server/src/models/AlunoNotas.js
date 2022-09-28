'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlunoNotas extends Model {
    
    static associate(models) {
      this.belongsTo(models.Aluno,{foreignKey:"aluno_id"});
      this.belongsTo(models.Prof,{foreignKey:"prof_id"});
      this.belongsTo(models.Turma,{foreignKey:"turma_id"});
      this.belongsTo(models.Materia,{foreignKey:"materia_id"});
    }
  }
  AlunoNotas.init({
    aluno_id: DataTypes.INTEGER,
    prof_id: DataTypes.INTEGER,
    turma_id: DataTypes.INTEGER,
    materia_id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    nota: DataTypes.DOUBLE,
    bimestre: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AlunoNotas',
  });
  return AlunoNotas;
};