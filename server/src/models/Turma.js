const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            ano: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'responsaveis'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        this.hasMany(models.Aula, {
            foreignKey: 'id_aluno',
            as: 'aulas'
        })
    }

}

module.exports = Turma;