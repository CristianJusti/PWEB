// funcoes.js
function encontrarMaiorNumero() {
    const num1 = parseFloat(prompt("Digite o primeiro número para encontrar o maior número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const num3 = parseFloat(prompt("Digite o terceiro número:"));

    const maior = Math.max(num1, num2, num3);
    return maior;
}

function ordenarEmOrdemCrescente() {
    const num1 = parseFloat(prompt("Digite o primeiro número para ordenar em ordem crescente:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const num3 = parseFloat(prompt("Digite o terceiro número:"));

    const numeros = [num1, num2, num3];
    numeros.sort(function (a, b) {
        return a - b;
    });
    return numeros;
}
