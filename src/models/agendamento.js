//model de agendamento que poderá se tornar um objeto
// ao invés de um model
const mongoose = require('mongoose');

const Agendamento = mongoose.model(
    'Agendamento', {
    data: String,
    escritorio: String,
    consultor : String,
});

module.exports = Agendamento;