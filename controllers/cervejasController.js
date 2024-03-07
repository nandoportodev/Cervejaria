// cervejasController.js

const database = require('../database');

exports.listarTodasAsCervejas = (req, res) => {
    database.query('SELECT * FROM cervejas')
        .then((resultado) => {
            res.status(200).send({ cervejas: resultado.rows });
        })
        .catch((error) => {
            console.error('Erro ao listar todas as cervejas:', error);
            res.status(500).send({ status: 'Erro de database' });
        });
};

exports.buscarCervejaPorNome = (req, res) => {
    const { nome } = req.query;
    database.query('SELECT * FROM cervejas WHERE nome ILIKE $1', ['%' + nome + '%'])
        .then((resultado) => {
            res.status(200).send({ cervejas: resultado.rows });
        })
        .catch((error) => {
            console.error('Erro ao buscar cerveja por nome:', error);
            res.status(500).send({ status: 'Erro de database' });
        });
};

exports.buscarCervejasPorNacionalidade = (req, res) => {
    const { nacionalidade } = req.query;
    database.query('SELECT * FROM cervejas WHERE nacionalidade = $1', [nacionalidade])
        .then((resultado) => {
            res.status(200).send({ cervejas: resultado.rows });
        })
        .catch((error) => {
            console.error('Erro ao buscar cervejas por nacionalidade:', error);
            res.status(500).send({ status: 'Erro de database' });
        });
};

exports.ordenarCervejasPorABV = (req, res) => {
    database.query('SELECT * FROM cervejas ORDER BY CAST(SUBSTRING(abv, 1, LENGTH(abv)-1) AS NUMERIC) DESC')
        .then((resultado) => {
            res.status(200).send({ cervejas: resultado.rows });
        })
        .catch((error) => {
            console.error('Erro ao ordenar cervejas por ABV:', error);
            res.status(500).send({ status: 'Erro de database' });
        });
};

exports.buscarCervejasPorTipo = (req, res) => {
    const { tipo } = req.query;
    database.query('SELECT * FROM cervejas WHERE tipo = $1', [tipo])
        .then((resultado) => {
            res.status(200).send({ cervejas: resultado.rows });
        })
        .catch((error) => {
            console.error('Erro ao buscar cervejas por tipo:', error);
            res.status(500).send({ status: 'Erro de database' });
        });
};

exports.buscarCervejasPorNomeParcial = (req, res) => {
    const { nomeParcial } = req.query;
    database.query('SELECT * FROM cervejas WHERE nome ILIKE $1', ['%' + nomeParcial + '%'])
        .then((resultado) => {
            res.status(200).send({ cervejas: resultado.rows });
        })
        .catch((error) => {
            console.error('Erro ao buscar cervejas por nome parcial:', error);
            res.status(500).send({ status: 'Erro de database' });
        });
};
