const ClienteService = require('../service/cliente.service');
const BaseController = require('./base.controller');

class ClienteController extends BaseController {

    constructor(){
        super();
        this.service = new ClienteService();
    }

    async getClienteByLogin(entity, login){
        return await this.service.getClienteByLogin(entity, login);
    }

}

module.exports = ClienteController;

