// model escritório 
const mongoose = require('mongoose');

const Escritorio = mongoose.model(
    'Escritorio', {
    cidade: {
        type: String,
        required: true
    },
});

module.exports = Escritorio;