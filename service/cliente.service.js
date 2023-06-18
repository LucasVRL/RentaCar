const BaseService = require('./base.service');

class ClienteService extends BaseService{

    constructor(){
        super();
    }

    async getClienteByLogin(entity, login){
        return await entity.model.findAll({
            where: {
                login: login
            }
        })
    }
}

module.exports = ClienteService;


 