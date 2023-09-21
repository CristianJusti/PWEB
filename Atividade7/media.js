var nomeAluno;
var nota1;
var nota2;
var nota3;
var media;

nomeAluno = prompt("Digite o nome do aluno:");

nota1 = parseFloat(prompt("Digite a primeira nota:"));
nota2 = parseFloat(prompt("Digite a segunda nota:"));
nota3 = parseFloat(prompt("Digite a terceira nota:"));

media = (nota1 + nota2 + nota3) / 3;

alert("Nome do aluno: " + nomeAluno + "\nMédia das notas: " + media.toFixed(2));