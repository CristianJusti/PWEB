var numero1, numero2, soma, subtracao, produto, divisao, resto;

numero1 = parseFloat(prompt("Digite o primeiro número:"));

numero2 = parseFloat(prompt("Digite o segundo número:"));

soma = numero1 + numero2;
subtracao = numero1 - numero2;
produto = numero1 * numero2;

if (numero2 !== 0) {
  divisao = numero1 / numero2;
  resto = numero1 % numero2;
} else {
  divisao = "Indefinida (divisão por zero)";
  resto = "Indefinido (divisão por zero)";
}

alert("Soma: " + soma + "\nSubtração: " + subtracao + "\nProduto: " + produto + "\nDivisão: " + divisao + "\nResto: " + resto);