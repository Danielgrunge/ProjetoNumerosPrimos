//função checarNumero
function checarNumero(){
  var numero = document.getElementById("numero").value;
      // criando uma lista para guardar os numeros que um numero "não primo" é divisivel
  var numerosPrimos = [];
    // criando uma variavel para guardar a soma dos numeros que um numero "não primo" é divisivel
  var somaDivisores = 0
  

      // testanto se o numero é primo, dividindo ele por todos antecessores 
    // e esperando como "resto diferente de 0" para determinar se é primo ou naõ  
    for (var i = 2; i < numero; i++)  {
          if (numero % i == 0) {   
          // acrecentando o resultado de i na lista
          numerosPrimos.push(i);                       
          }                  
    }          
    if (numerosPrimos.length != 0){
      //imprimindo a lista quando ela não esta vazia
      document.getElementById("result").textContent = "O número " + numero + " não é primo, pois é divisível pelos números: " + numerosPrimos;
      //criando uma repeticao para somar os divisores
      for(var i = numerosPrimos.length - 1; i >= 0; i--){
          somaDivisores = numerosPrimos[i] + somaDivisores
      }
      // imprimindo a soma dos divisores
      document.getElementById("sum-divisible-number").textContent ="A soma de seus divisores é: " + somaDivisores;
    } else if (numero < 1){
      document.getElementById("result").textContent = "Digite um número valido"
      document.getElementById("sum-divisible-number").textContent = ""
      
    }
      else {
      document.getElementById("result").textContent = "O número " + numero + " é primo, pois ele é divisível apenas por ele e por 1 ";
      document.getElementById("sum-divisible-number").textContent = "";
    }

 
  
}

function clearNumber(){
  document.getElementById('numero').value = ''
  document.getElementById("result").textContent = "";
  document.getElementById("sum-divisible-number").textContent = "";
}

var mostrar = document.getElementById("checar");
mostrar.addEventListener("click", checarNumero);

var limpar = document.getElementById("clear")
limpar.addEventListener("click", clearNumber)

var teste = document.getElementById("numero");
teste.addEventListener("change", checarNumero)

const input = document.querySelector("input");
input.addEventListener("click", function() {
    this.select();
})