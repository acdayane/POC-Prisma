# POC-Prisma

Este projeto usa Prisma e fornece a vitrine de um e-commerce de jóias, permitindo ao administrador cadastrar e deletar produtos. 

Somente back-end. Desenvolvido em camadas.

### Rotas

* POST("/product") - cadastra um novo produto a partir de um body no formato:
  {
    title:"Anel Sky",
    description: "Anel de Prata com uma pedra Topázio Sky e duas Topázios Incolores - Vivara",
    price: 36000,
    categoryId: 1
  };
* POST("/photo") - adiciona imagens ao produto cadastrado a partir de um body no formato:
  {
    productId: 1,
    url: "https://assets.vtex.app/unsafe.jpg"
  };
* DELETE("/product/:id") - apaga o produto e suas fotos a partir do id do produto recebido como parâmetro;
* GET("/") - retorna todos os produtos cadastrados.

### How to run

1. Clonar este repositório;
2. Instalar todas as dependências: npm i;
3. Rodar o servidor: npx nodemon src/index.ts.