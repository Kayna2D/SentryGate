const { Model, DataTypes } = require('sequelize');

class Chamada extends Model {
    static init(connection) {
        super.init({
            presenca: DataTypes.BOOLEAN,
        }, {
            sequelize: connection,
            tableName: 'chamadas'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

        this.hasOne(models.Aula, {
            foreignKey: 'id_aula',
            as: 'aulas'
        });

        this.hasMany(models.Aluno, {
            foreignKey: 'id_aluno',
            as: 'alunos'
        })


    }

}

module.exports = Chamada;