var input = document.querySelector("#display");

function limpar() {
    input.value = "";
} 

function del() {
    var lastchar = document.querySelector("#display").value;
    var newchar = lastchar.slice(0,-1);
    input.value = newchar;
}

function adicionar_numero(string) {
    var conta = document.getElementById("display").value   
    
    conta += string;
    
    document.getElementById("display").value = conta;
  }

function total() {
    var contaa = document.getElementById("display").value

    contaa = eval(contaa);

    document.getElementById("display").value = contaa
}