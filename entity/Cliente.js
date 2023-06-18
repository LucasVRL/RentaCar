const Entity = require('./entity');
//const CarrosService = require('../service/carros.service');
const { clienteModel } = require('../model/models');
const ClienteController = require('../controller/cliente.controller');
const bcrypt = require('bcrypt');

class Cliente extends Entity {

    constructor(){
        super();
        this.model = clienteModel;
        this.controller = new ClienteController();
    }

    async encryptPassword(password){
        return await bcrypt.hash(password, 10);
    }

    async comparePassword(password, hash){
        return await bcrypt.compare(password, hash);
    }

    async register(obj){
        const { password } = obj;
        obj.hashPassword = await this.encryptPassword(password);

        return this.create(obj);
    }

    async getClienteByLogin(login){
        const teste =  await this.controller.getClienteByLogin(this, login);
        return teste;
    }

    async login({ login, password }) {
        const cliente = await this.getClienteByLogin(login);
        if(cliente.length == 0)
            return false;

        const { hashPassword, nome, cpf, dataNasc } = cliente[0];

        if(await this.comparePassword(password, hashPassword)){
            return { nome, cpf, dataNasc, sucesso: true }
        } else {
            return { sucesso: false }
        }
    }

}

module.exports = Cliente;