# Blog Content Production API

Welcome to the Blog Content Production API! This project involves the development of an API and a database for creating content for a blog. The application is built using Node.js and utilizes the Sequelize package for performing CRUD operations on blog posts.

## Technologies Used:

- Docker
- Node.js
- Express.js
- mysql2
- MySQL
- Sequelize
- Mocha (Testing framework)
- Chai (Assertion library)
- jsonwebtoken (JWT for user authentication)

## Features:

- CRUD operations for blog posts.
- Endpoints connected to the database following REST principles.
- User and login requirements for creating posts, working on the relationship between users and posts.
- Utilizes categories for posts, establishing relationships between posts and categories, and categories and posts.

## How to Run:

To run the app, ensure you have Docker installed. Follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/blog-content-api.git
    cd blog-content-api
    ```

2. Run Docker Compose:
    ```bash
    docker-compose up -d
    ```

This command will start the app in detached mode.

## How to Test:

Run tests using Mocha and Chai:

```bash
npm install  # Install project dependencies
npm test
```

Feel free to contribute or report issues!

---

**Portuguese:**

# API de Produção de Conteúdo para Blog

Bem-vindo à API de Produção de Conteúdo para Blog! Neste projeto, você irá desenvolver uma API e um banco de dados para a criação de conteúdo para um blog. A aplicação é construída usando Node.js e utiliza o pacote Sequelize para realizar operações CRUD em posts de blog.

## Tecnologias Utilizadas:

- Docker
- Node.js
- Express.js
- mysql2
- MySQL
- Sequelize
- Mocha (Framework de teste)
- Chai (Biblioteca de assertiva)
- jsonwebtoken (JWT para autenticação de usuário)

## Recursos:

- Operações CRUD para posts de blog.
- Endpoints conectados ao banco de dados seguindo os princípios REST.
- Requisitos de usuário e login para criar posts, trabalhando na relação entre usuários e posts.
- Utilização de categorias para posts, estabelecendo relações entre posts e categorias, e categorias e posts.

## Como Executar:

Para executar a aplicação, certifique-se de ter o Docker instalado. Siga estes passos:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-nome/api-producao-conteudo-blog.git
    cd api-producao-conteudo-blog
    ```

2. Execute o Docker Compose:
    ```bash
    docker-compose up -d
    ```

Este comando iniciará a aplicação em modo destacado.

## Como Testar:

Execute os testes usando Mocha e Chai:

```bash
npm install  # Instala as dependências do projeto
npm test
```

Sinta-se à vontade para contribuir ou relatar problemas!