const { Model, DataTypes } = require('sequelize');

class Chamada extends Model {
    static init(connection) {
        super.init({
            falta: DataTypes.BOOLEAN,
        }, {
            sequelize: connection,
            tableName: 'chamadas'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        this.belongsToMany(models.Aluno, {
            foreignKey: 'id_chamada',
            through: 'chamadas_alunos',
            as: 'alunos'
        })

        this.belongsToMany(models.Aula, {
            foreignKey: 'id_aula',
            through: 'chamadas_aulas',
            as: 'aulas'
        })   
    }

}

module.exports = Chamada;