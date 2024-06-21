# App

API GymPass style app.

## Descrição do Projeto

A API permite que os usuários realizem ações como:

- Cadastro e autenticação de novos usuários.
- Obtenção de perfil e histórico de check-ins do usuário logado.
- Cadastro de novas academias.
- Busca de academias próximas (até 10 km) ou por nome.
- Realização de check-in em academias.
- Validação de check-ins.

## Instalação

Clone o repositório:


```bash
  git clone <URL_DO_REPOSITÓRIO>
```

```bash
  cd <NOME_DO_PROJETO>
```

Instalando as dependências do projeto:

```bash
  npm install
```

Suba os serviços necessários com Docker:

```bash
  docker-compose up -d
```

## Executando a aplicação

Após baixar o repositório, abra o terminal na pasta onde foi baixado e execute os seguintes comandos:

Compilar o código TypeScript:

```bash
  npm run build
```

Executar a aplicação:

```bash
  npm run start
```

Para desenvolvimento, utilize o modo de observação:

```bash
  npm run start:dev
```

## Requisitos do projeto

### RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil do usuário logado;
- [x] Deve ser possível obter o número de check-ins realizadas pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-in;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

### RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-in no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um bando PostgreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);

## Tecnologias utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![SOLID Principles](https://img.shields.io/badge/SOLID-008000?style=for-the-badge&logoColor=white)
