# POC-Prisma

Este projeto usa Prisma e fornece a vitrine de um e-commerce de jóias, permitindo ao administrador cadastrar, atualizar e deletar produtos, além de obter uma lista com todos os produtos cadastrados. 

Somente back-end. Desenvolvido em camadas.

### Rotas

* POST("/product") - cadastra um novo produto a partir de um body no formato:
  {
    title:"Anel Sky",
    description: "Anel de Prata com uma pedra Topázio Sky e duas Topázios Incolores - Vivara",
    price: 36000,
    categoryId: 1,
    imageId: 1
  };
* POST("/photo") - adiciona imagens para os produtos a partir de um body no formato:
  {
    url: "https://assets.vtex.app/unsafe.jpg"
  };
* GET("/") - retorna todos os produtos cadastrados;
* DELETE("/product/:id") - apaga o produto a partir de seu id recebido como parâmetro;
* PUT("/product/update") - atuliza os dados do produto a partir de um body no formato:
  {
    id: 1,
    title:"Anel Sky",
    description: "Anel de Prata com uma pedra Topázio Sky e duas Topázios Incolores - Vivara",
    price: 30000, 
    categoryId: 1,
    imageId: 1
  };.

### How to run

1. Clonar este repositório;
2. Instalar todas as dependências: npm i;
3. Rodar o servidor: npx nodemon src/index.ts.