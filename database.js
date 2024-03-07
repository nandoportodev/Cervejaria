const pg = require('pg')

const database = new pg.Client('postgres://qyxnlmom:okWiTiIQHEc2MRh8ziqLzU1Q7ym-27-0@silly.db.elephantsql.com/qyxnlmom')

database.connect((erro) => {
    if (erro) return console.log('Erro na conexão com o DB', erro)
    return console.log('Conectado ao DB!')
})

module.exports = database