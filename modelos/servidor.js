const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    guidID: String,
    prefijo: String,
})

const model = mongoose.model("configServer", serverSchema);

module.exports = model;