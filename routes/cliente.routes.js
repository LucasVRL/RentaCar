const express = require('express');
const router = express.Router();
const Cliente = require('../entity/Cliente');


router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const cliente = new Cliente();
        const resp = await cliente.getById(id);
        res.send({
            sucesso: true,
            cliente: resp.map(r => ({nome: r.nome, cpf: r.cpf, dataNasc: r.dataNasc}))
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.get('/', async (req, res) => {
    try{
        const cliente = new Cliente();
        const resp = await cliente.getAll();
        res.send({
            sucesso: true,
            carros: resp.map(r => ({nome: r.nome, cpf: r.cpf, dataNasc: r.dataNasc}))
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.post('/register', async (req, res) => {
    try{
        const obj = req.body;
        const cliente = new Cliente();
        if((await cliente.getClienteByLogin(obj.login)).length > 0){
            res.send({
                sucesso: false,
                msg: "Já existe usuário com este login, tente outro."
            });
        } else {
            const resp = await cliente.register(obj);
                res.send({
                sucesso: true,
                cliente: resp
            });
        }
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.post('/login', async (req, res) => {
    try{
        const obj = req.body;
        const cliente = new Cliente();
        const resp = await cliente.login(obj);
        if(resp){
            res.send(resp);
        } else {
            res.send({
                sucesso: false,
                msg: "Usuário ou senha incorreto."
            });
        }
        
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        });
    }
});


module.exports = router;
