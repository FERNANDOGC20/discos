$(document).on('ready',inicia);
//$(function(){
//});
function inicia()
{
	$('button').on('click',compra);
}
function compra()
{
var nodo=$(this).parent().children().first().next().text();
console.log(nodo);
$('aside').append('<li>'+nodo+'<li>');
var precio=$(this).parent().children().first().next().next().next().text();

precio=parseInt(precio);
precio+=precio;
$('div').append(precio);
}