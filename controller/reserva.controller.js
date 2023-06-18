const ReservaService = require('../service/reserva.service');
const BaseController = require('./base.controller');
const { Op } = require('sequelize');

class ReservaController extends BaseController {

    constructor(){
        super();
        this.service = new ReservaService();
    }

    async getReservaByCarro(entity, id){
        return await this.service.getReservaByCarro(entity, id);
    }

    async getReservaByCliente(entity, id){
        return await this.service.getReservaByCliente(entity, id);
    }

    async getReservaByData(entity, dataIni=undefined, dataFim=undefined){
        return await this.service.getReservaByData(entity, dataIni, dataFim);
    }

}

module.exports = ReservaController;

