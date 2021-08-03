const express = require('express');
const router = express.Router();

const citasCtrl = require('../controllers/citas.controller')

router.get('/', citasCtrl.getCitas);
router.post('/', citasCtrl.createCita);
router.get('/:id', citasCtrl.getCitaById);
router.put('/:id', citasCtrl.editCita);
router.delete('/:id', citasCtrl.deleteCita);


module.exports = router;

