// model Mesa  o id é auto incrementado pelo banco
const mongoose = require('mongoose');

const Mesa = mongoose.model(
    'Mesa', {
    escritorio: String,
    required : true,
    numero: Number,
    required: true

});

module.exports = Mesa;