var data = window.location.search;
var parametros = new URLSearchParams(data)
var nome = parametros.get("nome")
var endereco = parametros.get("endereco")
var cep = parametros.get("cep")
var compradorTexto = $( "#OlaComprador" );
//var compradorTexto = document.getElementById("OlaComprador")
compradorTexto.html("Olá "+nome+" faça seu pedido")
console.log(nome)
console.log(endereco)
console.log(cep)