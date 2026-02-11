# 🐶 API de Pets

API desenvolvida para o **Desafio Backend II**, com o objetivo de implementar uma **API REST** funcional, contemplando um **CRUD completo** para a gestão de pets.

O projeto demonstra a aplicação de conceitos fundamentais de backend, como organização de rotas, uso correto dos métodos HTTP e tratamento de erros.

---

## 🚀 Deploy

A API está disponível online via Render:

- **Base URL:**  
  https://api-de-pets-9s3v.onrender.com

---

## 🛠️ Tecnologias Utilizadas

- Node.js  
- Express  
- Middlewares (validação e tratamento de erros)
- Postman (testes de requisições)
- Render (deploy)

---

## 📦 Estrutura do Recurso: Pet

```json
{
  "id": "uuid",
  "nome": "string",
  "raça": "string",
  "idade": number,
  "tutor": "string"
}
```
Todos os campos são obrigatórios nas operações de criação e atualização.

---

## 📌 Endpoints
- **GET** /pets

Lista todos os pets cadastrados.

- **POST** /pets

Cria um novo pet.

- **PUT** /pets/:id

Atualiza um pet existente a partir do seu ID.

- **DELETE** /pets/:id

Remove um pet pelo ID informado.

---

## ⚠️ Tratamento de Erros

- A API realiza validações para garantir a integridade dos dados e o correto funcionamento das rotas, incluindo:

  - Verificação de campos obrigatórios no req.body

  - Retorno de erro ao tentar buscar, atualizar ou deletar um pet inexistente

  - Uso adequado de códigos de status HTTP
  
---

## 📚 Conceitos Aplicados

- Arquitetura REST

- CRUD completo

- Validação de dados

- Tratamento de erros

- Uso correto dos métodos HTTP

- Organização de rotas no Express

---

## 👩‍💻 Autora

Projeto desenvolvido por **Nathalia de Paula**

Desafio Backend II
