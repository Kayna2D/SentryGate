const { Model, DataTypes } = require('sequelize');

class Aula extends Model {
    static init(connection) {
        super.init({
            quantidade: DataTypes.INTEGER,
            data: DataTypes.DATE,
        }, {
            sequelize: connection,
            tableName: 'aulas'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

        //Uma turma pertence apenas a uma aula
        this.belongsTo(models.Turma, {
            foreignKey: 'id_turma',
            as: 'turmas'
        });

        //Um professor pertence apenas a uma aula
        this.belongsTo(models.Professor, {
            foreignKey: 'id_professor',
            as: 'professores'
        });

        //Uma matéria pertence apenas a uma aula
        this.belongsTo(models.Materia, {
            foreignKey: 'id_materia',
            as: 'materias'
        });
    }

}

module.exports = Aula;