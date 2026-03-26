const fs = require('fs');

const vendas = JSON.parse(fs.readFileSync('produtos.json', 'utf-8'));

//funções aula 1
const filtrarPorValorMinimo = (min) => (lista) => 
  lista.filter(item => item.valor >= min);

const filtrarPorCategoria = (categoria) => (lista) =>
  lista.filter(item => item.categoria === categoria);

const totalPorCategoria = (lista) =>
  lista.reduce((acc, item) => ({
    ...acc,
    [item.categoria]: (acc[item.categoria] || 0) + item.valor
  }), {});

const resumir = (lista) =>
  lista.map(({produto, valor, categoria}) => ({
    produto,
    valor,
    categoria
}));
const ordenarPorValor = (lista) =>
  lista.toSorted((a, b) => a.valor - b.valor);

//----------------------------------------------------------------------

//Implementação do pipe 
function pipe(...fns) {
  return function(valorInicial) {
    return fns.reduce((acc, fn) => fn(acc), valorInicial);
  };
}


//Soma dos produtos tech com mais de 500 reais
const faturamentoTechAcima500 = pipe(
  filtrarPorCategoria('tech'),
  filtrarPorValorMinimo(500),
  totalPorCategoria
);

const resultado = faturamentoTechAcima500(vendas);
console.log('\nSoma dos produtos de tech que custam mais de 500R$:', resultado);


//Qual os 3 acessorios mais baratos
const pegarPrimeiros = (n) => (lista) =>
  lista.slice(0, n);

const top3MaisBaratos = pipe(
  filtrarPorCategoria('acessórios'),
  ordenarPorValor,
  pegarPrimeiros(3)
);

console.log("\nTop 3 acessorios mais baratos:", top3MaisBaratos(vendas));


//quantos produtos de fotografia valem mais de 1000, e a soma deles
const contarETotalizar = (lista) => ({
  quantidade: lista.length,
  total: lista.reduce((soma, item) => soma + item.valor, 0)
});

const totalFotografiaAcimaDe1000 = pipe(
  filtrarPorCategoria('fotografia'),       
  filtrarPorValorMinimo(1000),      
  contarETotalizar                  
);
console.log("\nProdutos de fotografia que valem mais de 1000R$: ",totalFotografiaAcimaDe1000(vendas));


//Saber quais produtos da categoria 'moveis' custam menos de 800 e ver apenas informações essenciais.
const filtrarPorValorMaximo = (max) => (lista) => 
  lista.filter(item => item.valor <= max);

const moveisAcessiveisResumidos = pipe(
  filtrarPorCategoria('móveis'),      
  filtrarPorValorMaximo(800),         
  resumir                             
);

console.log("\nProdutos de moveis que custam menos de 800 reais: ",moveisAcessiveisResumidos(vendas));


