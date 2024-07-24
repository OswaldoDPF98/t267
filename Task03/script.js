function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operador = document.getElementById("operador").value;
    var resultado;
  
    switch (operador) {
      case "soma":
        resultado = num1 + num2
        break;
      case "substracao":
        resultado = num1 - num2
        break;
      case "multiplicacao":
        resultado = num1 * num2
        break;
      case "divisao":
        if(num2 != 0){
          resultado = num1 / num2
        }else{
          resultado = "Erro: divisão por zero"
        }
        break;
  
      default:
        resultado = "Operador inválido"
    }
  
    document.getElementById("resultado").textContent = resultado;
  }