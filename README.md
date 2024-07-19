# API Agendamento de Vacinação
Este repositório contém o backend de uma aplicação de agendamento de vacinas. Ele gerencia e armazena dados sobre agendamentos, incluindo informações como nome do agendado, data de nascimento, data e horário do agendamento, e status do atendimento.

## Índice
* [Funcionalidades](https://github.com/SamsSouza22/BackendPitang2024#Funcionalidades)
* [Tecnologias Utilizadas](https://github.com/SamsSouza22/BackendPitang2024#tecnologias-utilizadas)
* [Instalação](https://github.com/SamsSouza22/BackendPitang2024#instalacao)
* [Estrutura do Projeto](https://github.com/SamsSouza22/BackendPitang2024#estrutura-do-projeto)
* [Rotas da API](https://github.com/SamsSouza22/BackendPitang2024#rotas-da-api)
* [Licença](https://github.com/SamsSouza22/BackendPitang2024#licenca)

## Funcionalidades
* Listagem de Agendamentos: Retorna todos os agendamentos, ordenados por data e horário do agendamento.
* Criação de Agendamento: Permite a criação de um novo agendamento.
* Atualização de Agendamento: Permite atualizar o status de um agendamento específico.
* Filtragem de Agendamentos: Permite buscar agendamentos com base no nome do agendado.

## Tecnologias Utilizadas

* [Node.js](https://nodejs.org/en)
* [Express](https://expressjs.com/pt-br/)
* [JSON Server](https://www.npmjs.com/package/json-server)
* [Axios](https://axios-http.com/ptbr/docs/intro)

## Instalação

1. Clone o repositório
```
git clone https://github.com/SamsSouza22/BackendPitang2024.git
cd backend
```
2. Instale as dependências
```
npm install
```
3. Inicie o servidor
    1. Para iniciar em um ambiente de desenvolvimento:
        ```
        npm run dev
        ```
    2. Para iniciar em um ambiente de produção:
       ```
        npm run start
       ```
4. Inicie o JSON Server
    1. No command prompt, acesse a pasta data
       ```
       cd backend\data
       ```
    2. Para iniciar o JSON Server:
       ```
       json-server --watch db.json
       ```
## Estrutura do Projeto
```
backend/
├── data/
│   └── db.json
├── src/
│   ├── controllers/
│   │   └── agendamento.controller.mjs
│   ├── routes/
│   │   └── agendamento.router.mjs
│   └── index.mjs
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

## Rotas da API

#### GET /api/agendamentos
* Retorna todos os agendamentos, ordenados por data e horário do agendamento

#### POST /api/agendamentos
* Cria um novo agendamento
  * Request body:
    ```
    {
        "nome": "Amanda",
        "nascData": "2002-07-16",
        "agendData": "2024-07-25T08:00:00.000Z",
        "status": "Pendente"
    }
    ```

### PATCH /api/agendamentos/:id
* Atualiza o status de um agendamento específico
  * Request body:
    ```
    {
        "novoStatus": "Realizado"
    }
    ```

### Licença
Feito por Samara Simplicio de Souza 😊