const { Model, DataTypes } = require('sequelize');

class Materia extends Model {
    static init(connection) {
        super.init({
            nome_materia: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'materias'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

        this.belongsToMany(models.Aula, {
            foreignKey: 'id_materia',
            through: 'materias_aulas',
            as: 'aulas'
        })   

        this.belongsToMany(models.Horario, {
            foreignKey: 'id_materia',
            through: 'horarios_materias',
            as: 'horarios'
        }) 

        this.belongsToMany(models.Professor, {
            foreignKey: 'id_materia',
            through: "professores_materias",
            as: "professores"
        })
    }

}

module.exports = Materia;