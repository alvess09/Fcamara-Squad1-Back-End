//model de agendamento que poderá se tornar um objeto
// ao invés de um model
const mongoose = require('mongoose');

const Agendamento = mongoose.model(
    'Agendamento', {
    data: Number,
    escritorio: String,
    consultor : String,
});

module.exports = Agendamento;