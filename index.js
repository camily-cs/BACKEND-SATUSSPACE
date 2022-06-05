/* SERVIDOR EXPRESS */
/* Importando e utilizando o servidor express */
const express = require ('express');
const app = express();
//fazendo o servidor express receber e tratar dados no formato json
app.use(express.json());


//####### CORS #########
//importando e utilizando o modulo cors
const cors = require("cors");
app.use(cors());


//######### MYSQL ###########
//importar o módulo do mysql para a manipulação de banco de dados
const mysql = require("mysql");
//criando conexao com o banco de dados MYSQL
const conexao = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});

//testando conexao com o banco de dados
    //conexao.threadId-mostra o id da thread que estabeleceu a conexao com o banco de dados
    conexao.connect((erro)=>{
        if(erro){
            console.error("Erro ao estabelecer a conexão com o banco de dados "+erro.stack);
            return;
        }
        console.log("Conectado ao banco de dados -> "+conexao.threadId);
    });


/* ROTAS */
/* Importando e utilizando a rota usuario */
const rotaUsuario = require('./routes/usuario');
app.use('usuario', rotaUsuario);


app.listen(3000,()=>console.log("Servidor online na porta 3000"));