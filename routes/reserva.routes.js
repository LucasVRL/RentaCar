const express = require('express');
const router = express.Router();
const Reserva = require('../entity/Reserva');

router.get('/', async (req, res) => {
    try{
        const reserva = new Reserva();
        const resp = await reserva.getAll();
        res.send({
            sucesso: true,
            reservas: resp
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        });
    }
});

router.get('/data/', async (req, res) => {
    try{
        const { dataini, datafim } = req.query;
        const reserva = new Reserva();
        const resp = await reserva.getReservaByData(dataini, datafim);
        res.send({
            sucesso: true,
            reserva: resp
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        });
    }
});

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const reserva = new Reserva();
        const resp = await reserva.getById(id);
        res.send({
            sucesso: true,
            reserva: resp
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        });
    }
});

router.get('/cliente/:id', async (req, res) => {
    try{
        const clienteId = req.params.id;
        const reserva = new Reserva();
        const resp = await reserva.getReservaByCliente(clienteId);
        res.send({
            sucesso: true,
            reserva: resp
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        });
    }
});

router.get('/carro/:id', async (req, res) => {
    try{
        const carroId = req.params.id;
        const reserva = new Reserva();
        const resp = await reserva.getReservaByCarro(carroId);
        res.send({
            sucesso: true,
            reserva: resp
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        });
    }
});

router.post('/', async (req, res) => {
    try{
        let obj = req.body;
        obj.statusPagamento = "PENDENTE";
        const reserva = new Reserva();
        const resp = await reserva.create(obj);
        res.send({
            sucesso: true,
            reserva: resp
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        });
    }
});

module.exports = router;
