
//encapsulamento um dos pilares da programação orientada ao objeto.
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario; para um atributo ser privado no javascript ele não pode ultilizar o this.
    let _salario = salario; //um ponto importante que temos na programação ultilizando atributos privados... temos a convenção de nomear os atributos com underline(_) antes..assim identificamos como atributo privado.
    //um atributo privado não é acessivel atravez da notação ponto (.).
    //temos que criar um metodo para a função privada.
    //assim conseguimos acessa-la.
    this.getSalário = function() {
        return `O salário de ${this.nome} é ${_salario}`;
    }

    //para atribuirmos um valor ao atributo privado devemos criar uma função para atribuir outro salario ao funcionário.
    this.setSalario = function(valor) {
        //podemos verificar se a atribuição é do tipo numerica para prevenir problemas com string.
        if (typeof valor === 'number')
        _salario = valor;
    }
    //quando trabalhamos com uma função que retorna um valor privado e uma que configura um valor... chamamos a função que retorna de (get) ex: getSalario . e a função que configura(atribui) o valor de (set) ex:setSalario. getters e setters funções que fazem o get (recuperam) e funções que setam esse valor  (setters).


    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000)
const pessoa = new Pessoa("david");

//executando as funções
funcionario1.dizOi();
funcionario1.dizCargo();

//depois de criarmos a função para aumentar o salário ... executamos ela...
funcionario1.setSalario(7000);


console.log(funcionario1.getSalário());
