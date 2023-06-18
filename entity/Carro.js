const Entity = require('./entity');
//const CarrosService = require('../service/carros.service');
const { carrosModel } = require('../model/models');
const Reserva = require('../entity/Reserva');
const CarrosController = require('../controller/carros.controller');


class Carro extends Entity {

    constructor(){
        super();
        this.model = carrosModel;
        this.controller = new CarrosController();
    }

    async getCarrrosByModelo(modelo){
        return await this.controller.getCarrosByModelo(this, modelo);
    }

    async getCarrosByData(dataIni=undefined, dataFim=undefined){
        const carros = await this.getAll();
        const reserva = new Reserva();
        const reservasData = await reserva.getReservaByData(dataIni, dataFim);
        let carrosDisponiveis = [];
        await Promise.all(carros.map(async c => {
            if(!reservasData.find(r => r.idCarro == c.id )){
              carrosDisponiveis.push(c);
            }
        }));
         
       return carrosDisponiveis; 
    }

}

module.exports = Carro;