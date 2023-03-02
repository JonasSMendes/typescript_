var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calc(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calc(+numero1.value, +numero2.value).toString();
});
