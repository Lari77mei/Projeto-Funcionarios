// Classe base Funcionario
class Funcionario {
    constructor(nome, salario, dataAdmissao) {
      this.nome = nome;
      this.salario = salario;
      this.dataAdmissao = dataAdmissao;
    }
  
    // Método que calcula o bônus de 10% do salário
    calcularBonus() {
      return this.salario * 0.10;
    }
  
    // Método que exibe os detalhes do funcionário
    exibirDetalhes() {
      return `
        <div class="funcionario">
          <h3>Funcionário</h3>
          <strong>Nome:</strong> ${this.nome}<br>
          <strong>Salário:</strong> R$ ${this.salario.toFixed(2)}<br>
          <strong>Data de Admissão:</strong> ${this.dataAdmissao}<br>
          <strong>Bônus:</strong> R$ ${this.calcularBonus().toFixed(2)}
        </div>
      `;
    }
  }
  
  // Classe derivada Gerente
  class Gerente extends Funcionario {
    constructor(nome, salario, dataAdmissao, departamento) {
      super(nome, salario, dataAdmissao);
      this.departamento = departamento;
    }
  
    // Sobrescrevendo o método calcularBonus (20% do salário)
    calcularBonus() {
      return this.salario * 0.20;
    }
  
    // Exibir detalhes incluindo departamento
    exibirDetalhes() {
      return `
        <div class="funcionario">
          <h3>Gerente</h3>
          <strong>Nome:</strong> ${this.nome}<br>
          <strong>Salário:</strong> R$ ${this.salario.toFixed(2)}<br>
          <strong>Data de Admissão:</strong> ${this.dataAdmissao}<br>
          <strong>Departamento:</strong> ${this.departamento}<br>
          <strong>Bônus:</strong> R$ ${this.calcularBonus().toFixed(2)}
        </div>
      `;
    }
  }
  
  // Criando objetos
  const funcionario1 = new Funcionario("Carlos Silva", 3000.00, "2021-05-10");
  const gerente1 = new Gerente("Ana Souza", 8000.00, "2019-03-01", "Recursos Humanos");
  
  // Mostrando na tela
  const resultado = document.getElementById("resultado");
  resultado.innerHTML += funcionario1.exibirDetalhes();
  resultado.innerHTML += gerente1.exibirDetalhes();