const mongoose = require('mongoose');

const Consultor = mongoose.model(
    'Consultor', {
    nome: String,
    email: String

});

module.exports = Consultor;