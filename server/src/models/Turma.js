const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
    static init(connection) {
        super.init({
            nome_turma: DataTypes.STRING,

        }, {
            sequelize: connection,
            tableName: 'turmas'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

        this.belongsToMany(models.Aluno, {
            foreignKey: 'id_turma',
            through: 'alunos_turmas',
            as: 'turmas'
        })

       this.belongsToMany(models.Horario, {
        foreignKey: 'id_turma',
        through: 'horarios_turmas',
        as: 'horarios'
        })
    }

}

module.exports = Turma;