
//vmos aprender a verificar os tipos de dados.
const nome = "weverson" //string
const idade = 34 //number
const ehMaiorDeIdade = true //bolean
const conhecimentos = ["html", "css", "javascript"] //array  object

//usando essas informação para criar um objeto literal.
const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

//vmos verificar esses tipos de dados.
//usamos o typeof para nos retornar o tipo da variavel indicada.
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);

//no carroDaMaria2 que foi feito no exe01 ultilizando constructor vai ter como retorno um object. Por que o js por padrão não reconhcem os tipos customizados criados a partir das funções construtoras. para isso a gent eusa outra palavrinha reservada como o instanceof. (mais no exe1.) 