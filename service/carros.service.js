const BaseService = require('./base.service');

class CarrosService extends BaseService{

    constructor(){
        super();
    }

    async getCarrosByModelo(carros, modelo){
        return await carros.model.findAll({
            where: {
                modelo: modelo
            }
        })
    }

}

module.exports = CarrosService;


 