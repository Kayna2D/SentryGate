'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('AlunoNotas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate:{
          notEmpty: {msg:"Informe o aluno"}
        },
        reference: {
          model: "Aluno",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      id_prof: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "Prof",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      id_materia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "Materia",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      id_turma: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "Turma",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      nome: {
        allowNull:false,
        type: Sequelize.STRING
      },
      nota: {
        allowNull:false,
        type: Sequelize.DOUBLE
      },
      bimestre: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AlunoNotas');
  }
};