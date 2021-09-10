const mongoose = require('mongoose');

const Mesa = mongoose.model(
    'Mesa', {
    escritorio: String

});

module.exports = Mesa;