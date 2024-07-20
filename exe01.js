//primeira maneira de criar um objeto no java script é a literal ... como por exemplo:
const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    //aqui tbm podemos ter uma função...quando uma atributo recebe uma função nos mudamos a forma de chamar... chamamos de método (método acelerar).
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

//segunda maneira implementando as duas constantes de cima (carroDoJoao e carroDaMaria)
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    //para criar um atributo dentro de uma função construtora a gente ultilisa a palavra reservada (this) que faz referência ao Carro.
    this.modelo = modelo;
    //this seria Carro.modelo igual modelo que foi passado como atributo. 
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}   

//criando o carro do joão e da maria ultilizando a estrutura "function Carro".
//chamando a função Carro em carroDoJoao2 com a chamada (new), com o new a gente vai ter o retorno do objeto que foi criado. se chamarmos apenas Carro a gente não vai ter o retorno do novo objeto criado.
const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019 );
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

//essas são as duas maneirar de criarmos objetos no javascript.


//exe2 instanceof é ultilizado para verificação de tipos de instâncias. retornando um bolean(true ou false)
console.log(carroDaMaria2 instanceof Carro)
