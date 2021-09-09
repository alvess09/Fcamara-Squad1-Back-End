module.exports = {
    dbFunc,
    dbDesk
}
/*Construtor de dados dos Usuarios*/
const data = {
    nome: String,
    email: String,
    cidade: String
}
const dbFunc = insereUsuarios [] = [] 

/* A ideia é que os dados fiquem populados aqui por enquanto para depois criarmos as rotas do back-end */
const insereUsuarios= ()=>{
    dbFunc.push({
        nome: data.nome,
        email: data.email
    });
}

const mesasDisponiveis = []
    for (let i = 0; i < 600; i++) {
        if (i % 4 == 0){
            mesasDisponiveis.push(i)
        }
    }
    
const dbDesk = string.reduce( x => x % 4 == 0)

/* CRIAÇÃO DE COLEÇÕES / TABELAS DO BANCO DE DADOS */
const dadosColecao = { 
    escritorios : {
      "escritorio1" : "São Paulo" , 
      "escritorio2" : "Santos"
    },
    consultor : {
        "id" : 1,
        "nome" : "",
        "email" : ""
    },
    mesas : {
        "idmesa" : 1,
        "escritório" : this.escritorios{
            if (escritorios == this.escritorio1) {
                return this.escritorio1 ;
            }
            return this.escritorio2;
        }
    },
    agendamento : {
        "data" : "16/09/2021",
        "escritório" : this.escritorios{
            if (escritorios == this.escritorio1) {
                return this.escritorio1 ;
            }
            return this.escritorio2;
        }
    }
    
}
