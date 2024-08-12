var data = window.location.search;
var parametros = new URLSearchParams(data);
var nome = parametros.get("nome");
var cep = parametros.get("cep");
var compradorTexto = $("#OlaComprador");
compradorTexto.html("Olá " + nome + " confirme seu pedido");
var cepTexto = $("#Cep-confirmacao");
cepTexto.html("Enviando o pedido para o endereço de Cep: " + cep);
