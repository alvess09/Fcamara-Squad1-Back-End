const dados = require('./db.js')
/* capturar dados do formulario e inserir no JSON => A fazer */

/* recuperar os dados inseridos*/
const consultor = {
    nome: dados.dbFunc.nome,
    email: dados.dbFunc.email,
    cidade: dados.dbFunc.cidade
}

const mesa = {
    numero: dados.dbDesk.numero,
    ocupacao: dados.dbDesk.ocupacao,
    reserva: dados.dbDesk.reserva
}
console.log(consultor)
console.log(mesa)

/*Separar por unidade*/
const qgSaoPaulo = (desks) => {
    let desks = []
    for (let i = 0; i < 601; i++) {
        desks.push(mesa(numero, ocupacao, reserva))
    }
    return (desks)
}


const qgSantos = (desks2) => {
    let desks2 = []
    for (let i = 0; i < 100; i++) {
        desks.push(mesa(numero, ocupacao, reserva))
    }
    return (desks2)
}
console.log(qgSaoPaulo.desks2)