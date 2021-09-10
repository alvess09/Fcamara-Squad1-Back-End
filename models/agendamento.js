const mongoose = require('mongoose');

const Agendamento = mongoose.model(
    'Agendamento', {
    data: Number,
    escritorio: String,
    consultor : String
});

module.exports = Agendamento;