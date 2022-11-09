'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('aulas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_turma: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "turmas",
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_materia: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "materias",
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_professor: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "professores",
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('aulas');
  }
};
