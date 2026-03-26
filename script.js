const fs = require('fs');
const vendas = JSON.parse(fs.readFileSync('produtos.json', 'utf-8'));

//funções de filtragem 

//filtrar por Valor minimo
const filtrarPorValorMinimo = (min) => (lista) => 
  lista.filter(item => item.valor >= min);

console.log("\nProdutos caros: ",filtrarPorValorMinimo(1000)(vendas));

// Filtrar por categoria
const filtrarPorCategoria = (categoria) => (lista) =>
lista.filter(item => item.categoria === categoria);

console.log("\nProdutos da categoria Tech: ",filtrarPorCategoria("tech")(vendas));


//FUNÇÕES DE TRANSFORMAÇÃO E AGREGAÇÃO

const resumir = (lista) =>
  lista.map(({produto, valor, categoria}) => ({
    produto,
    valor,
    categoria
}));
console.log("\nLista Resumida: ", resumir(vendas))

  
//Resumir, mostrar so o nome do produto
const nomes = vendas.map(venda => venda.produto)
console.log("\nProdutos disponiveis: ",nomes)


// total por categoria, usa reduce
const totalPorCategoria = (lista) =>
  lista.reduce((acc, item) => ({
    ...acc,
    [item.categoria]: (acc[item.categoria] || 0) + item.valor
  }), {});

  console.log("\nTotal por Categoria: " , totalPorCategoria(vendas))

//Valor total produtos
const totalProdutos = vendas.reduce((acc, p) => acc + p.valor, 0);
console.log("O valor total dos produtos é: ", totalProdutos);


/*ORDENAR POR VALOR

sort - modifica o array original e retorna uma referência a ele
/function ordenarPorValor(lista) {
  return [...lista].sort((a, b) => a.valor - b.valor);
}*/ 

//ordenar por valores toSorted - cria uma lista nova, copia e ordena
const ordenarPorValor = (lista) =>
  lista.toSorted((a, b) => a.valor - b.valor);
console.log("\nLista Ordenada por valores:" , ordenarPorValor(vendas))


/// --- Funções de filtragem ---

// filtrarPorValorMinimo
console.assert(filtrarPorValorMinimo(1000)(vendas).length === 16,'Deveria retornar 16 itens acima de 1000');
console.assert(filtrarPorValorMinimo(5000)(vendas).length === 0,'Nenhum item acima de 5000');
console.assert(filtrarPorValorMinimo(0)([]).length === 0,'Lista vazia deve retornar vazia');
console.assert(filtrarPorValorMinimo(1500)([{produto:'Computador', valor:1500, categoria:'tech'}]).length === 1,'Lista com 1 item igual ao mínimo');
console.assert(filtrarPorValorMinimo(2000)(vendas).length === 8,'Deveria retornar 8 itens com valor >= 2000');


// filtrarPorCategoria
console.assert(filtrarPorCategoria('tech')(vendas).length === 2,'Deveria retornar 2 itens na categoria tech');
console.assert(filtrarPorCategoria('móveis')(vendas).length === 3,'Deveria retornar 3 itens na categoria móveis');
console.assert(filtrarPorCategoria('roupas')([]).length === 0,'Lista vazia retorna vazia');
console.assert(filtrarPorCategoria('móveis')([{produto:'Pc', valor:100, categoria:'tech'}]).length === 0,'Lista com 0 item da categoria móveis');


// --- Funções de transformação ---

// resumir
const resumo = resumir(vendas);

console.assert(resumo.length === vendas.length,'Resumo deve ter mesmo tamanho da lista original');

console.assert(
  resumo[0].produto === 'Notebook' &&
  resumo[0].valor === 3200 &&
  resumo[0].categoria === 'tech',
  'Resumo deve manter campos corretos'
);

console.assert(resumo !== vendas,'Resumo é um novo array, não altera original');
console.assert(resumo[0] !== vendas[0],'Cada objeto do resumo é novo, não é o mesmo do original');


// --- Funções de agregação ---

// totalPorCategoria
const total = totalPorCategoria(vendas);

console.assert(total.tech === 7700,'Total tech deve ser 3200 + 4500 = 7700');
console.assert(total['móveis'] === 2950,'Total móveis deve ser 1200 + 1500 + 250 = 2950');
console.assert(typeof total === 'object','Total deve retornar um objeto');


// --- Funções de ordenação ---

// ordenarPorValor
const ordenado = ordenarPorValor(vendas);
console.assert(ordenado[0].valor === 45,'Primeiro item ordenado deve ser o menor valor');
console.assert(ordenado[ordenado.length - 1].valor === 4500,'Último item ordenado deve ser o maior valor');

// Checa que retorna novo array
console.assert(ordenado !== vendas,'Ordenação retorna novo array, não altera original');

console.assert( ordenarPorValor([]).length === 0,'Lista vazia deve retornar vazia');
console.assert(Object.keys(totalPorCategoria([])).length === 0,'Lista vazia retorna objeto vazio');

console.log('\nTodos os testes passaram com sucesso!');