const { Sequelize } = require("sequelize");
const db = require('../database/db');

db.sync();

module.exports = {
    carrosModel: db.define('Carros', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        modelo: {
            type: Sequelize.STRING(20)
        },
        marca: {
            type: Sequelize.STRING(20)
        },
        ano: {
            type: Sequelize.INTEGER
        },
        cor: {
            type: Sequelize.STRING(20)
        },
        valorDia: {
            type: Sequelize.FLOAT
        }
    },{
        timestamps: false
    }),

    clienteModel: db.define('Clientes', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING(100)
        },
        cpf: {
            type: Sequelize.STRING(11)
        },
        dataNasc: {
            type: Sequelize.DATE
        },
        login: {
            type: Sequelize.STRING(50)
        },
        hashPassword: {
            type: Sequelize.STRING(100)
        }
    }),

    reservaModel: db.define('Reservas', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idCarro: {
            type: Sequelize.INTEGER
        },
        idCliente: {
            type: Sequelize.INTEGER
        },
        dataInicio: {
            type: Sequelize.DATE
        },
        dataFim: {
            type: Sequelize.DATE
        },
        valor: {
            type: Sequelize.FLOAT
        },
        statusPagamento: {
            type: Sequelize.STRING(20)
        }
    })
} 