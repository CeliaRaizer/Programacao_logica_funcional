# Projeto Prático — PBL 

## Sistema de vendas

O sistema original de análise de vendas possui objetos com os seguintes campos:
- ID - Representa o código do produto
- Produto - Representa o nome do produto vendido
- Valor - Representa valor de venda do produto
- Categoria - Representa o tipo de produto
- Data - Representa a data de venda do produto
- Vendedor - Representa a pessoa responsável pela venda

Com esses dados podemos responder algumas perguntas de negócio como:
1. Qual produto vendeu mais?
2. Qual vendedor vendeu mais?
3. Qual categoria de produtos vende mais?
4. Quais produtos são mais caros?
5. Quais produtos são mais baratos?
6. Quais produtos são mais caros de cada categoria?
7. Quais produtos são mais baratos de cada categoria?
8. Qual o faturamento total?
9. Qual o total de vendas realizadas?

Se resolvêssemos essas perguntas com loop, teríamos soluções nesse estilo: 

  Pseudocódigo Produto mais vendido:
  
    inicio

      produtos[...]
      mais vendido = " " //guarda nome do produto mais vendido
      maior = 0
      // Loop externo: seleciona um produto por vez para comparar
      para (i = 0; i < tamanho(produtos); i++) faça
          contador = 0
  
          // Loop interno: percorre a lista para contar quantas vezes o produto[i] aparece
          para (j = 0; j < tamanho(produtos); j++) faça
              se (produtos[j] == produtos[i]) então
                  contador = contador + 1
              fimse
          fimpara
  
          // Verifica se a contagem atual supera o recorde anterior
          se (contador > maior) então
              maior = contador
              maisVendido = produtos[i]
          fimse
      fimpara
  
      escreva ("Mais vendido: ", maisVendido)
      fim

Pseudocódigo do vendedor que mais vendeu:
```bash
inicio

  vendedores = [...]
  
  maisVendeu = ""
  maior = 0
  
  para (i = 0; i < tamanho(vendedores); i++) faça
  contador = 0
  
      	para (j = 0; j < tamanho(vendedores); j++) faça
         se (vendedores[j] == vendedores[i]) então
              contador = contador + 1
          fimse
      	fimpara
  
  se (contador > maior) então
          maior = contador
          maisVendeu = vendedores[i]
  fimse
  
  fimpara
  
  escreva ("Vendedor que mais vendeu: ", maisVendeu)

fim
```

Pseudocódigo Categoria mais vendida:
```bash
inicio

  categorias = [...]
  
  maisVendida = ""
  maior = 0
  
  para (i = 0; i < tamanho(categorias); i++) faça
  contador = 0
  
   	para (j = 0; j < tamanho(categorias); j++) faça
          		se (categorias[j] == categorias[i]) então
              		contador = contador + 1
      		fimse
      	fimpara
  
      se (contador > maior) então
          maior = contador
          maisVendida = categorias[i]
      fimse
  
  fimpara
  
  escreva ("Categoria mais vendida: ", maisVendida)

fim

```

Pseudocódigo Produtos mais caros:
```bash
inicio

  produtos = [...]
  valores = [...]
  
  maisCaro = ""
  maiorValor = 0
  
  para (i = 0; i < tamanho(produtos); i++) faça
  
      se (valores[i] > maiorValor) então
          maiorValor = valores[i]
          maisCaro = produtos[i]
      fimse
  
  fimpara
  
  escreva ("Produto mais caro: ", maisCaro)
  escreva ("Valor: ", maiorValor)

fim
```
Pseudocódigo Produtos mais baratos:
```bash
inicio

  produtos = [...]
  valores = [...]
  
  maisBarato = ""
  menorValor = infinito
  
  para (i = 0; i < tamanho(produtos); i++) faça
  
      se (valores[i] < menorValor) então
          menorValor = valores[i]
          maisBarato = produtos[i]
      fimse
  
  fimpara
  
  escreva ("Produto mais barato: ", maisBarato)
  escreva "Valor: (", menorValor)

fim
```
Pseudocódigo mais caros de cada categoria:
```bash
  inicio

  produtos = [...]
  valores = [...]
  categorias = [...]
  
  maisCaroPorCategoria = {}
  
  para (i = 0; i < tamanho(produtos); i++) faça
  
      categoriaAtual = categorias[i]
      
      se (categoriaAtual não existe em maisCaroPorCategoria) então
          maisCaroPorCategoria[categoriaAtual] = {
              produto: produtos[i],
              valor: valores[i]
          }
      senao
          se (valores[i] > maisCaroPorCategoria[categoriaAtual].valor) então
              maisCaroPorCategoria[categoriaAtual] = {
                  produto: produtos[i],
                  valor: valores[i]
              }
          fimse
      fimse
  
  fimpara
  
  para cada categoria em maisCaroPorCategoria faça
      escreva ("Categoria: ", categoria)
      escreva ("Produto mais caro: ", maisCaroPorCategoria[categoria].produto)
      escreva ("Valor: ", maisCaroPorCategoria[categoria].valor)
  fimpara

fim
```
Pseudocódigo mais baratos de cada categoria:
```bash
inicio

  produtos = [...]
  valores = [...]
  categorias = [...]
  
  maisBaratoPorCategoria = {}
  
  para (i = 0; i < tamanho(produtos); i++) faça
  
      categoriaAtual = categorias[i]
      
      se (categoriaAtual não existe em maisBaratoPorCategoria) então
          maisBaratoPorCategoria[categoriaAtual] = {
              produto: produtos[i],
              valor: valores[i]
          }
      senao
          se (valores[i] < maisBaratoPorCategoria[categoriaAtual].valor) então
              maisBaratoPorCategoria[categoriaAtual] = {
                  produto: produtos[i],
                  valor: valores[i]
              }
          fimse
      fimse
  
  fimpara
  
  para cada categoria em maisBaratoPorCategoria faça
      escreva ("Categoria: ", categoria)
      escreva ("Produto mais barato: ", maisBaratoPorCategoria[categoria].produto)
      escreva ("Valor: ", maisBaratoPorCategoria[categoria].valor)
  fimpara

fim
```

Pseudocódigo Faturamento total:

    inicio

      valores = [...]
  
      total = 0
  
      para (i = 0; i < tamanho(valores); i++) faça
          total = total + valores[i]
      fimpara
      
      escreva ("Faturamento total: ", total)

    fim

Pseudocódigo Total de vendas realizadas:
```bash
inicio

  total = 0
  
  para (i = 0; i < tamanho(lista); i++) faça
      total = total + 1
  fimpara
  
  escreva ("Total de vendas: ", total)

fim
```


Se Implementássemos esses códigos imperativos, possivelmente teriamos problemas como:
- Repetição de lógica
- Baixa testabilidade
- Difícil de reutilizar
- Possibilidade maior de erros
- Menor clareza

## Funções implementadas

### filtrarPorValorMinimo
Filtra os produtos com base em um valor mínimo  
Foi implementada dessa forma para permitir reutilização e composição em pipelines

### filtrarPorCategoria
Filtra os produtos por categoria  
Segue o mesmo padrão funcional, permitindo aplicar filtros de forma flexível e combinável

### Resumir
Transforma a lista original em uma lista com os campos mais essenciais  
Reduz os dados para apenas os campos essenciais, facilitando análises posteriores

### totalPorCategoria
Mostra o valor total de cada categoria  
Utiliza reduce para acumular valores em um objeto, evitando loops e mantendo o estilo funcional

### ordenarPorValor
Ordena os valores sem mutar a lista original  
Utiliza toSorted para evitar mutação do array original, garantindo previsibilidade.

## Teste de funções

Para garantir a qualidade e confiabilidade do sistema, todas as funções foram testadas de forma independente, seguindo os princípios da programação funcional.
Os testes foram realizados utilizando console.assert, permitindo validar automaticamente se os resultados estão corretos.

### Objetivos dos testes
- Garantir que cada função funciona isoladamente
- Validar diferentes cenários de uso
- Evitar efeitos colaterais (imutabilidade)
- Aumentar a confiança no código

Cada função foi testada com pelo menos dois cenários diferentes, incluindo:

1. Listas normais (com vários dados)
2. Lista vazia
3. Lista com apenas um item
4. Dados inesperados

Resumo dos testes
- Filtragem: retorna corretamente e lida com ausência de resultados
- Transformação: mantém estrutura e não altera dados originais
- Agregação: soma corretamente e retorna objeto
- Ordenação: ordena sem mutar o array
- Imutabilidade: todas as funções retornam novos dados

## function composition - Composição de funções

Composição de funções combina duas ou varias funções para criar uma nova função, aplicando uma função ao resultado da outra.   
Composição de funções ajuda em qualquer código onde você precisa aplicar várias transformações sequenciais.   
Ela evita criar variáveis temporárias ou repetições de código

## Pipe vs Compose

Pipe e compose são funções de ordem superior, usadas para combinar pequenas funções e criar funções mais complexas.

### Pipe 
A saída de uma função é a entrada da próxima.   
A leitura é feita na ordem lógica de execução (esquerda para a direita).

### Compose

A saída da função da direita é passada como entrada para a função à esquerda. 
A ordem de aplicação é da direita para a esquerda

## Implementação do pipe

A função pipe foi implementada usando reduce, sem uso de loops.
Ela recebe várias funções e aplica em sequência sobre um valor.

A função é pura, pois:
- Não altera dados externos
- Não possui efeitos colaterais
- Sempre retorna o mesmo resultado para as mesmas entradas

### Pipeline 1: faturamentoTechAcima500 

Problema: identificar o faturamento de produtos da categoria tech com valor acima de 500 reais.  
Esse tipo de análise é importante para entender quais produtos de maior valor estão gerando receita
```bash
Etapas:
1. Filtrar produtos da categoria tech
2. Filtrar produtos com valor mínimo de 500
3. Somar valores por categoria
```
Resultado: retorna o total de vendas da categoria tech acima de 500 reais


### Pipeline 2: top3MaisBaratos

Problema: identificar os 3 produtos mais baratos da categoria acessórios.  
Essa análise pode ser usada para destacar produtos acessíveis

```bash
Etapas:
1. Filtrar produtos da categoria acessórios
2. Ordenar os produtos por valor
3. Selecionar os 3 primeiros
```
Resultado: retorna uma lista com os 3 produtos mais baratos

### Outros pipelines implementados:
- totalFotografiaAcimaDe1000 - Contaliza quantos produtos de fotografia valem mais de 1000, e a soma deles
- moveisAcessiveisResumidos - Produtos da categoria 'moveis' que custam menos de 800 e apenas informações essenciais

  #### E se precisarmos adicionar um novo filtro amanhã?
  Basta adicionar uma nova função no pipeline, sem alterar as demais.  
  Isso torna o código flexível e fácil de manter.


## Tratamento de erros

Foi implementado um pipeline seguro utilizando o padrão Maybe.

Isso evita erros quando uma etapa não retorna resultados, sem usar try/catch.

Exemplo:
Se um filtro não encontrar resultados, o pipeline retorna um valor padrão em vez de quebrar.

## Decisões de design

As funções foram escritas seguindo o paradigma funcional, com foco em:

- Funções puras (sem efeitos colaterais)
- Imutabilidade (não alteram os dados originais)
- Uso de funções pequenas e reutilizáveis

Cada função realiza apenas uma tarefa específica, como filtrar, ordenar ou transformar dados.

Isso permite que elas sejam combinadas facilmente usando pipe.

## Pesquisas realizadas

Durante o desenvolvimento, pesquisamos:

- Funções puras
- Sort, toSorted
- Composição de funções em JavaScript
- Diferença entre pipe e compose
- Partial application currying JS
- Uso de reduce para composição
- Tratamento de erros com Maybe

Fontes:
- Chatgpt
- Vídeos no Youtube
    - https://youtu.be/qBdl0btiZOc?si=-Vkp6M3-4eCVH_Le  
    - https://youtu.be/A8ATE1d_2xM?si=LYUs294oSTnS6xMC    
    - https://youtu.be/V2M-SsVXlm8?si=DVAgA8eJVb1vOvqU
