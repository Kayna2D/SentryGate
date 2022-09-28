'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Turma', {
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
      nome: {
        allowNull:false,
        type: Sequelize.STRING
      },
      horario: {
        allowNull:false,
        type: Sequelize.TIME
      },
      ano: {
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
    await queryInterface.dropTable('Turma');
  }
};