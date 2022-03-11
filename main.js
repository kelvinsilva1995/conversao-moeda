function ConverterDolarReal() {
  var valorElemento = document.getElementById("valorDolar");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterRealDolar() {
  var valorElemento = document.getElementById("valorReal");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico / 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
