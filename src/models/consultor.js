// modelo tabela Consultor
const mongoose = require('mongoose');

const Consultor = mongoose.model(
    'Consultor', {
    nome: String,
    email: String
    //talvez entre um campo senha : number
});

module.exports = Consultor;