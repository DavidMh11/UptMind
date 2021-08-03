const citasCtrl = {};
const cita = require('../models/citas');


citasCtrl.getCitas = async (req, res) => {
    const citas = await cita.find()
    res.json(citas);
}
citasCtrl.createCita = async (req, res) => {
    const citas = new cita(req.body)
    await citas.save();
    res.json({
        status: 'Cita guardada'
    });
}
citasCtrl.getCitaById = async (req, res) => {
    const citas = await cita.findById(req.params.id)
    res.json(citas)
}
citasCtrl.editCita = async (req, res) => {
    const { id } = req.params;
    const citas = {
        situacion: req.body.situacion,
        importancia: req.body.importancia,
        fecha: req.body.fecha
    };
    await cita.findByIdAndUpdate(id, { $set: citas }, { new: true })
    res.json({
        status: 'Cita actualizada'
    });
}
citasCtrl.deleteCita = async (req, res) => {
    await cita.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Cita eliminada'
    });
}
module.exports = citasCtrl;


