const carrosRouter = require('./carros.routes');
const clienteRouter = require('./cliente.routes');
const reservaRouter = require('./reserva.routes');

module.exports = (app) => {
    app.use('/rentacar/carros', carrosRouter);
    app.use('/rentacar/cliente', clienteRouter);
    app.use('/rentacar/reserva', reservaRouter);
}

