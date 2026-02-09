import { pets } from './pets.js';
import {randomUUID} from 'crypto';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { validarPet } from './middlewares.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Rota para listar os pets
app.get("/pets", (req, res) => {
    try {
        // Entrada
        const { nome, raça, idade, tutor } = req.query;

        let dados = pets;
        if(nome) {
            dados = dados.filter(item => item.nome.includes(nome));
        }
        if(raça) {
            dados = dados.filter(item => item.raça.includes(raça));
        }
        if(idade) {
            dados = dados.filter(item => item.idade >= Number(idade));
        }
        if(tutor) {
            dados = dados.filter(item => item.tutor.includes(tutor));
        }

        res.status(200).send({
            ok: true,
            mensagem: "Pets listados com sucesso!",
            dados
        });

    } catch(error) {
        res.status(500).send({ 
            ok: false,
            mensagem: error.toString()
         });
    }
});

// Rota para listar pet por id
app.get("/pets/:id", (req, res) => {
    try {
        const { id } = req.params;

        const petEncontrado = pets.find(item => item.id === id);

        if(!petEncontrado) {
            return res.status(404).send({
                ok: false,
                message: "Pet não encontrado!"
            });
        }

        res.status(200).send({
            ok: true,
            message: "Pet encontrado com sucesso!",
            dados: petEncontrado
        });

    } catch(error) {
        res.status(500).send({
            ok: false,
            message: error.toString()
        });
    }
});

// Rota para criar um novo pet
app.post("/pets",[validarPet] , (req, res) => {
    try {
        // Entrada
        const body = req.body;

        const novoPet = {
            id: randomUUID(),
            nome: body.nome,
            raça: body.raça,
            idade: body.idade,
            tutor: body.tutor
        }

        // Processamento
        pets.push(novoPet);

        // Saída
        res.status(201).send({
            ok: true,
            message: "Pet criado com sucesso!",
            dados: novoPet
        });

    } catch(error) {
        res.status(500).send({ 
            ok: false,
            mensagem: error.toString()
         });
    }
});

// Rota para atualizar um pet por id
app.put("/pets/:id",[validarPet] , (req, res) => {
    try {
        const { id } = req.params;
        const { nome, raça, idade, tutor } = req.body;

        const pet = pets.find(item => item.id === id);

        if(!pet) {
            return res.status(404).send({
                ok: false,
                message: "Pet não encontrado!"
            });
        }

        pet.nome = nome;
        pet.raça = raça;
        pet.idade = idade;
        pet.tutor = tutor;

        res.status(200).send({
            ok: true,
            message: "Pet atualizado com sucesso!",
            dados: pet
        });

    } catch(error) {
        res.status(500).send({
            ok: false,
            message: error.toString()
        });
    }
});

// Rota para deletar um pet por id
app.delete("/pets/:id", (req, res) => {
    try {
        const { id } = req.params;  

        const pet = pets.find(item => item.id === id);
        if(!pet) {
            return res.status(404).send({
                ok: false,
                message: "Pet não encontrado!"
            });
        }

        pets.splice(pets.indexOf(pet), 1);

        res.status(200).send({
            ok: true,
            message: "Pet deletado com sucesso!"
        });
    } catch(error) {
        res.status(500).send({
            ok: false,
            message: error.toString()
        });
    }
});


const porta = process.env.PORT;
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
