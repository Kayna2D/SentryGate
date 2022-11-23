const { Model, DataTypes } = require('sequelize');

class Aula extends Model {
    static init(connection) {
        super.init({
            quantidade_aula: DataTypes.INTEGER,
            data_aula: DataTypes.DATE,
        }, {
            sequelize: connection,
            tableName: 'aulas',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        this.belongsToMany(models.Materia, {
            foreignKey: 'id_aula',
            through: 'materias_aulas',
            as: 'materias'
        })

        this.belongsToMany(models.Chamada, {
            foreignKey: 'id_aula',
            through: 'chamadas_aulas',
            as: 'chamadas'
        })
    }
}

module.exports = Aula;