const express = require('express');
const router = express.Router();
const Carro = require('../entity/Carro');

router.get('/data', async (req, res) => {
    try{
        const { dataini, datafim } = req.query;
        const carro = new Carro();
        const resp = await carro.getCarrosByData(dataini, datafim);
        res.send({
            sucesso: true,
            carros: resp
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const carro = new Carro();
        const resp = await carro.getById(id);
        res.send({
            sucesso: true,
            carro: resp
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
        const carro = new Carro();
        const resp = await carro.getAll();
        res.send({
            sucesso: true,
            carros: resp
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.post('/', async (req, res) => {
    try{
        const obj = req.body;
        const carro = new Carro();
        const resp = await carro.create(obj);
        res.send({
            sucesso: true,
            carroCriado: resp.dataValues
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        });
    }
});

router.put('/:id', async (req, res) => {
    try{
        const obj = req.body;
        const id = req.params.id;
        const carro = new Carro();
        await carro.update(id, obj);
        res.send({
            sucesso: true
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const carro = new Carro();
        await carro.delete(id);
        res.send({
            sucesso: true
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

module.exports = router;
