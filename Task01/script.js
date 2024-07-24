function somar() {
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  
  var resp = document.getElementById("respSoma")
  resp.textContent = n1 + n2;
}

function subtração() {
  var n3 = parseInt(document.getElementById("n3").value);
  var n4 = parseInt(document.getElementById("n4").value);
  
  var resp = document.getElementById("respSub")
  resp.textContent = n3 - n4;
}

function divisão() {
  var n5 = parseInt(document.getElementById("n5").value);
  var n6 = parseInt(document.getElementById("n6").value);
  
  var resp = document.getElementById("respDiv")
  resp.textContent = n5 / n6;
}

function multiplicação() {
  var n7 = parseInt(document.getElementById("n7").value);
  var n8 = parseInt(document.getElementById("n8").value);
  
  var resp = document.getElementById("respMul")
  resp.textContent = n7 * n8;
}

function media() {
  var m1 = parseFloat(document.getElementById("m1").value);
  var m2 = parseFloat(document.getElementById("m2").value);
  var m3 = parseFloat(document.getElementById("m3").value);
  var media =  document.getElementById("respMedia");
  var res = (m1 + m2 + m3)/3

  if(res >= 7){
    media.textContent = res.toFixed(1)
    media.style.color = "green";
    media.style.backgroundColor = "#6CD180";
    media.style.padding = "5px";
  } else {
    media.textContent = res.toFixed(1)
    media.style.color = "red";
    media.style.backgroundColor = "#lightpink";
    media.style.padding = "5px";
  }
}

function contar() {
  const num = parseFloat($("#numeroInput").val())
  var resultadoStr = ""
  if(num <= 100){
    for(var cont = 1; cont <= num; cont++){
      resultadoStr = resultadoStr + cont + "<br>"
    }
    $("#result").html(resultadoStr)
  } else{
    $("#result").text("Digite um numero menor que 100!!!");
  }

}