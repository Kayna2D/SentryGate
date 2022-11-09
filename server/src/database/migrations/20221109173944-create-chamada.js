'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('chamadas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_aluno: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "alunos",
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_aula: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "aulas",
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      presenca: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable('chamadas');
  }
};
