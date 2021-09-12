// modelo tabela Consultor
const mongoose = require('mongoose');

const Consultor = mongoose.model(
    'Consultor', {
    nome: {type : String,
    required: true,},
    email: {type: String,
    required: true}
    //talvez entre um campo senha : number
});

module.exports = Consultor;
