// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cervejasController');

// Endpoints existentes
router.get('/buscar-por-nome', controller.buscarCervejaPorNome);
router.get('/buscar-por-nacionalidade', controller.buscarCervejasPorNacionalidade);
router.get('/ordenar-por-abv', controller.ordenarCervejasPorABV);
router.get('/buscar-por-tipo', controller.buscarCervejasPorTipo);
router.get('/buscar-por-nome-parcial', controller.buscarCervejasPorNomeParcial);

// Novo endpoint para listar todas as cervejas
router.get('/', controller.listarTodasAsCervejas);

module.exports = router;
