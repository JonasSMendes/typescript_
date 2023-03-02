var numero1 = document.getElementById('numero1')as HTMLInputElement;
var numero2 = document.getElementById('numero2')as HTMLInputElement;
var botao = document.getElementById('calcular')as HTMLInputElement;
var res = document.getElementById('resultado') as HTMLInputElement

function calc(n1: number, n2: number) {
    return n1 + n2;
}

botao.addEventListener('click', function () {
    res.innerHTML = calc(+numero1.value, +numero2.value).toString();
});
