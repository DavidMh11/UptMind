const mongoose = require('mongoose');
const { Schema } = mongoose;

const citasSchema = new Schema({
    situacion: { type: String },
    importancia: { type: String },
    fecha: { type: String },
});

module.exports = mongoose.model('cita', citasSchema)



