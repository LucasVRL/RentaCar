const Entity = require('./entity');
//const CarrosService = require('../service/carros.service');
const { reservaModel } = require('../model/models');
const ReservaController = require('../controller/reserva.controller');

class Reserva extends Entity {

    constructor(){
        super();
        this.model = reservaModel;
        this.controller = new ReservaController();
    }

    async getReservaByCarro(id){
        return await this.controller.getReservaByCarro(this, id);
    }

    async getReservaByCliente(id){
        return await this.controller.getReservaByCliente(this, id);
    }

    async getReservaByData(dataIni=undefined, dataFim=undefined){
        return await this.controller.getReservaByData(this, dataIni, dataFim);
    }

}

module.exports = Reserva;