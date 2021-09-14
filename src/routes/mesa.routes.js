const { response } = require('express');
const express  = require('express');
const router = express.Router();
const Mesa = require('../models/mesa');
 
//Rotas de acesso

// PEGAR TODAS AS ROTAS
router.get('/', async (req, res) =>{
    //regra de negocio entra aqui
    try {
        const mesa = await Mesa.find({});
        res.json({ error: false, mesa });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

// PEGAR SOMENTE REGISTRO COM ID
router.get('/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        const mesa = await Mesa.findById(id);
        res.json({ error: false, mesa });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

// CRIAR UM REGISTRO 
router.post('/', async (req, res) =>{
    try{
        const mesa = req.body;
    const response = await new Mesa(mesa).save();
    res.json({error : false, agendamento : response});

    } catch (err) {
        res.json({error : true, message : err.message});
    }
    
});

// ATUALIZAR SOMENTE REGISTRO COM ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const nova_mesa = req.body;

        const mesa = await Mesa.findByIdAndUpdate(id, nova_mesa);
        res.json({ error: false, mesa });

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

// DELETAR SOMENTE REGISTRO COM ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}`});
});



module.exports = router;