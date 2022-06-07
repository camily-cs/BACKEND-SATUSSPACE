//ROTA DE ADMIN-TESTAR ROTAS
const express = require('express');
const app = express.Router();

    //GET-LISTAR TODOS OS ADMINS
    app.get( "/api/admin/listar", (req, res) => {
        /*res.status(200).send ({
             output:("Todos admins cadastrados")
        }); */

        //CONSULTANDO O BANCO DE DADOS PARA EXIBIR LISTA DE ADMINS CADASTRADOS:
        conexao.query("select * from tbAdminSatus",(erro,resultado)=>{
            if(erro){
                return res.status(500).send({output:"Erro ao tentar executar a consulta "+erro});
            }
            res.status(200).send({output:resultado});
        });
    });


    //GET-LISTAR APENAS UM ADMIN
    app.get("/api/admin/listar/:id", (req, res) => {
        /* res.send ("Admin fulano"); */

        //CONSULTANDO O BANCO DE DADOS PARA EXIBIR UM ADMIN CADASTRADO:
        conexao.query("select * from tbAdminSatus where idAdmin = ?", [req.params.id], (erro,resultado)=>{
            if(erro){
                return res.status(500).send({output:"Erro ao tentar executar a consulta "+erro});
            }
            res.status(200).send({output:resultado});
        });
    });


    //POST-CADASTRAR ADMIN
    app.post("/api/admin/cad", (req, res) => {
        res.status(200).send ({
            output:(`Olá ${ req.body.nomeAdmin}, Você foi cadastrado(a) com sucesso.`)
        });
    });


    //PUT-ATUALIZAR DADOS DO ADMIN
    app.put("/api/admin/atualizar/:id", (req, res) => {
        /* res.send(`O id passado foi ${req.params.id} e os dados para atualização são ${req.body} `); */
        conexao.query("update tbAdmin set ? where idAdmin=?", [req.body, req.params.id], (erro, resultado) => {
            if(erro){
                res.status(500).send({output:`Erro ao atualizar dados do administrador -> ${erro}`});
                return;
            }
            res.status(200).send({output:resultado});
        });
    });


    //DELETE-DELETAR ADMIN
    app.delete("/api/admin/apagar/:id", (req, res) => {
        /* res.send(`Administrador de id ${req.params.id} foi deletado com sucesso`); */
        conexao.query("delete from tbAdmin where idAdmin = ?", [req.params.id],  (erro,resultado) => {
            if(erro){
                res.status(500).send({output: `Erro ao deletar administrador -> ${erro} `});
                return;
            }
            res.send(200).send({output:resultado});
        });
    });

    
/* exportando o modulo router */
module.exports = app;