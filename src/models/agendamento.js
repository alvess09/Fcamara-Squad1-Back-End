//model de agendamento que poderá se tornar um objeto
// ao invés de um model
const mongoose = require('mongoose');

const Agendamento = mongoose.model(
    'Agendamento', {
    data: {
        type: String,
        required: true
    },
    escritorio: {
        type: String,
        required: true
    },
    consultor: {
        type: String,
        required: true
    },
});

module.exports = Agendamento;