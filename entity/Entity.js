const BaseController = require('../controller/base.controller');

class Entity {
    constructor(){
        this.controller = new BaseController();
    }

    async getAll() {
        return await this.controller.getAll(this);
    }

    async getById(id) {
        return await this.controller.getById(this, id);
    }

    async create(obj){
        return await this.controller.create(this, obj);
    }

    async update(id, obj){
        return await this.controller.update(this, id, obj);
    }   

    async delete(id){
        return await this.controller.delete(this, id);
    }
}

module.exports = Entity;