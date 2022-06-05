/* ROTA USUARIO - OK*/
const express = require('express');
const router = express.Router();

    //GET-LISTAR TODOS OS USUARIOS-OK
    router.get( "/api/usuario/listar", (req, res) => {
        /*res.status(200).send ({
             output:("Todos usuarios cadastrados")
        }); */

        //CONSULTANDO O BANCO DE DADOS PARA EXIBIR LISTA DE USUARIOS CADASTRADOS:
        conexao.query("select * from tbUsuario",(erro,resultado)=>{
            if(erro){
                return res.status(500).send({output:"Erro ao tentar executar a consulta "+erro});
            }
            res.status(200).send({output:resultado});
        });
    });


    //GET-LISTAR APENAS UM USUARIO-OK
    router.get("/api/usuario/listar/:id", (req, res) => {
        /* res.send ("Usuario fulano"); */

        //CONSULTANDO O BANCO DE DADOS PARA EXIBIR UM USUARIO CADASTRADO:
        conexao.query("select * from tbUsuario where idUsuario = ?", [req.params.id], (erro,resultado)=>{
            if(erro){
                return res.status(500).send({output:"Erro ao tentar executar a consulta "+erro});
            }
            res.status(200).send({output:resultado});
        });
    });


    //POST-CADASTRAR USUARIO-OK
    router.post("/api/usuario/cad", (req, res) => {
        res.status(200).send ({
            output:(`Olá ${ req.body.nomeUsuario}, Você foi cadastrado(a) com sucesso.`)
        });
    });


    //PUT-ATUALIZAR DADOS DO USUARIO-OK
    router.put("/api/usuario/atualizar/:id", (req, res) => {
        /* res.send(`O id passado foi ${req.params.id} e os dados para atualização são ${req.body} `); */
        conexao.query("update tbUsuario set ? where idUsuario=?", [req.body, req.params.id], (erro, resultado) => {
            if(erro){
                res.status(500).send({output:`Erro ao atualizar dados do usuario -> ${erro}`});
                return;
            }
            res.status(200).send({output:resultado});
        });
    });


    //DELETE-DELETAR USUARIO-OK
    router.delete("/api/usuario/apagar/:id", (req, res) => {
        /* res.send(`Usuario de id ${req.params.id} foi deletado com sucesso`); */
        conexao.query("delete from tbUsuario where idUsuario = ?", [req.params.id],  (erro,resultado) => {
            if(erro){
                res.status(500).send({output: `Erro ao deletar usuario -> ${erro} `});
                return;
            }
            res.send(200).send({output:resultado});
        });
    });

/* exportando o modulo router */
module.exports = router;