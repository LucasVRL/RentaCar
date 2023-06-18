const BaseService = require('./base.service');
const { Op } = require('sequelize');

class ReservaService extends BaseService{

    constructor(){
        super();
    }

    async getReservaByCarro(entity, id){
        return await entity.model.findAll({
            where: {
                idCarro: id
            }
        });
    }

    async getReservaByCliente(entity, id){
        return await entity.model.findAll({
            where: {
                idCliente: id
            }
        });
    }

    async getReservaByData(entity, dataIni=undefined, dataFim=undefined){
        if(dataIni && dataFim){
            return await entity.model.findAll({
                where: {
                    dataInicio: {
                        $gte: new Date(dataIni)                        
                    },
                    dataFim: {
                        $lte: new Date(dataFim)
                    }
                }
            });
        }   
        else if(dataIni){
            return await entity.model.findAll({
                where: {
                    dataInicio: {
                        $gte: new Date(dataIni)                        
                    }
                }
            });
        } else {
            return await entity.model.findAll({
                where: {
                    dataFim: {
                        $lte: new Date(dataFim)
                    }
                }
            });
        }   
    }    
}

module.exports = ReservaService;


 