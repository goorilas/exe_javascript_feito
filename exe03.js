// vamos ver como acessar os atributos dentro de um objeto.

const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("Vrummm");
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("Vrummm");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}   

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019 );
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "weverson" 
const idade = 34 
const ehMaiorDeIdade = true 
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

const pessoaDois = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

//para acessar um atributo de um objeto básicamente a gente tem duas maneiras.
//primeira atravez da notação (.) ponto, que é o (.) antes do nome da propriedade (pessoa).
//acessamos a váriavel (pessoa) e a propriedade dentro dela (nome)
console.log(pessoa.nome)

//a outra maneira de termos esse resultado é através dos colchetes "[]".
//a msm maneira que fazemos com o array. 
//passamos a variavel (pessoa)abrimos colchetes e passamos o nome do atributo.
console.log(pessoa['nome'])

//atributo dinâmico só feitos com os colchetes, não pode ser usado com notação ponto (.).
function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

pessoa.sobrenome = 'david';
//podemos fazer tbm com colchetes, que vai dar o mesmo resultado.
// pessoa['sobrenome'] = 'david';
//para verificar se um atributo existe em um elemento a gente pode ultilizar a notação ponto ou o colchetes.
if (pessoa.sobrenome) {
    console.log("a pessoa tem um sobrenome")
}

//para fazer que uma constande tenha o seu valor imutável no atributo temos uma função chamada Object.Freeze.
//Object para acessar ua função construtora do objeto, e freeze função de congelar.
Object.freeze(pessoa);

pessoaDois['sobrenome'] = undefined;
//quando fazemos um if assim alem de verificar a existencia do atributo o JS verifica se ele não é nullo ou undefined.
//para verificar se o atributo existe independente de se é null ou undefined.
//usamos a palavra reservada (in) para fazer a verificação msm sendo null ou undefined.
if ('sobrenome' in pessoaDois) {
    console.log('tem sobrenome')
}

//a gente pode transformar os atributos em um array com o nome dos atributos.
//executamos Object.keys  que é o atributo chave e passando o objeto (pessoa). 
console.log(Object.keys(pessoa));
//usamos .length para saber a quantidade de propriedades de um objeto.
console.log(Object.keys(pessoa).length);
//podemos tbm transformas os valores da propriedade em arrays.
console.log(Object.values(pessoa));