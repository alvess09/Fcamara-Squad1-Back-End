//model de agendamento que poderá se tornar um objeto
// ao invés de um model
const mongoose = require('mongoose');

const Agendamento = mongoose.model(
    'Agendamento', {
    data: {
        type: String,
        
    },
    escritorio: {
        type: String,
        
    },
    consultor: {
        type: String,
        
    },
    email: {
        type: String,
      }
});

module.exports = Agendamento;