# Desafio Front-end - MOVISIS

## Aplicação modelo e-commerce

A aplicação simula a operação de uma loja online e permite realizar um processo de checkout simples.

### Funcionalidades

* Listagem e busca por produtos;
* Filtra produtos por preço;
* Ordena os resultados da busca por preço e data de inclusão;
* Permite adicionar e remover produtos do carrinho;
* Sempre exibe a quantidade de itens no carrinho;
* Salva o carrinho em cache;

### API de produtos

A aplicação consome a API do Mercado Livre para buscar por produtos.

## Como rodar a aplicação

Clone a aplicação para um repositório no seu computador, entre na pasta da aplicação e execute o comando

```
npm install
```

Depois, inicie o serviço de front-end com o comando

```
npm start
```

Pronto, já deve ser possível acessar a aplicação pela URL `http://localhost:3000/`.

## Informações adicionais

### Manipulação de estado
  * Foi utilizado o `ContextAPI`, com um contexto para os Produtos e outro contexto para o Carrinho de Compras;
  * O carrinho de compras fica salvo no `Local Storage`;
  * Toda a estilização da aplicação foi feita para ser vizualizada em uma tela com resolução de 1366x768 pixels. Em outras resoluções, a aplicação pode ser renderizada com seus elementos desalinhados.
