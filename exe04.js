
//Aplicando herança.
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
    //criando novo metodo dizCargo.
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

// a função construtora pessoa teve como this funcionario atravez da Pessoa.call.

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;
//para fazer uma herança temos que chamar (call) da função construtora (Pessoa) logo depois dos atributos da classe que vai herdar... classe filha.
//dentro de call passamos alguns argumentos como (this) que vai ser o msm this do funcionario, e como segundo argumento passamos o argumento da função (nome).
    Pessoa.call(this, nome);
// esse this se refere ao funcionario.
}

//mesmo que os atributos do funcionário não estiverem dentro da função pessoa eles são acessiveis com a herança Pessoa.call(this, nome)

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000)


//porem se tiverssemos executado o dizCargo para uma pessoa teriamos um erro..o cargo não existe na função construtora pessoa.
//exemplo. 
const pessoa = new Pessoa("david");

//executando metodos.
funcionario1.dizOi();
funcionario1.dizCargo();
pessoa.dizCargo();
