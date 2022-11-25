const { Model, DataTypes } = require('sequelize');

class Horario extends Model {
    static init(connection) {
        super.init({
            dia_horario: DataTypes.STRING,
            hora_horario: DataTypes.TIME
        }, {
            sequelize: connection,
            tableName: 'horarios',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        this.belongsToMany(models.Turma, {
            foreignKey: 'id_horario',
            through: 'horarios_turmas',
            as: 'turmas'
        })

        this.belongsToMany(models.Materia, {
            foreignKey: 'id_horario',
            through: 'horarios_materias',
            as: 'materias'
        }) 
    }
}

module.exports = Horario;