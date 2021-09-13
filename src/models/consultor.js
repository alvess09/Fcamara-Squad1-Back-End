// modelo tabela Consultor
const mongoose = require('mongoose');

const Consultor = mongoose.model(
    'Consultor', {
    nome: String,
    required: true,
    email: String,
    required: true
    //talvez entre um campo senha : number
});

module.exports = Consultor;