# api-store-comics

API em Node com TypeScript.

Para o banco foi escolhido o MySQL e o Prisma como ORM.

## Repository Pattern

A API foi construida respeitando as regras do Repository Pattern, sendo possível trocar o banco ou a fonte de dados sem impactar na regra de negócios da API.

Dentro de src/reposistories/Prisma criei o Comics.ts com algumas funções básicas CRUD no banco.

O services em src/services é responsável por consumir os repositories e retornar os dados, para ele não importa se o banco é mongo, sql ou um json fixo, ele apenas consulta e retorna para o controller o dado.

## Test

Para testes configurei o JEST e criei alguns testes de integração, para validar se esta listando, criando, remove as categorias

O teste consome um mock que cria dados fake e envia para os services, validando assim se o fluxo de dados vai estar correto.

![alt text](https://github.com/flyp-felype/api-store-comics/blob/main/test.png?raw=true)

 

env
````
# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://{USER}:{PASS}@localhost:3306/{DATANASE}"
PORT=3000
````

## ToDo List

- [x] Criar API
- [x] Configurar TypeScript
- [x] Prisma ORM
- [x] Criar Repositories
- [x] Criar Services
- [x] Criar Controller
- [ ] Criar Middleware Auth Token
- [x] Criar Tests