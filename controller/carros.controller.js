const CarrosService = require('../service/carros.service');
const BaseController = require('./base.controller');

class CarrosController extends BaseController {

    constructor(){
        super();
        this.service = new CarrosService();
    }

    async getCarrosByModelo(entity, modelo){
        return await this.service.getCarrosByModelo(entity, modelo);
    }

}

module.exports = CarrosController;

