//polimorfismo

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
    let _salario = salario; 
    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number')
        _salario = valor;
    }
    //(1.1) em porcentagem 1.1 é o mesmo que 110% do valor a ser multiplicado
    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

//podemos fazer o aumento do salário o estágiario com polimorfismo fazendo atraves de uma nova classe
function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Estagiário", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Gerente("Paula")


//executando as funções

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())

