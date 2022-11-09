const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            nome_social: DataTypes.STRING,
            data_nasc: DataTypes.STRING,
            genero: DataTypes.STRING,
            rg: DataTypes.STRING,
            cpf: DataTypes.STRING,
            sexo: DataTypes.STRING,
            cep: DataTypes.STRING,
            cidade: DataTypes.STRING,
            bairro: DataTypes.STRING,
            rua: DataTypes.STRING,
            tel: DataTypes.STRING,
            matricula: DataTypes.INTEGER
        }, {
            sequelize: connection,
            tableName: 'professores',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        this.hasMany(models.Aula, {
            foreignKey: 'id_professor',
            as: 'aulas'
        })
    }
}

module.exports = Professor;