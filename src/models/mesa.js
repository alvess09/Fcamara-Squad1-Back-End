// model Mesa  o id é auto incrementado pelo banco
const mongoose = require('mongoose');

const Mesa = mongoose.model(
    'Mesa', {
    escritorio: {
        type: String,
        required: true
    }
});

module.exports = Mesa;