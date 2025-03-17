let nomeAluno = prompt("Qual o nome do aluno?")
let nota1 = Number(prompt("Informe a primeira nota"))
let nota2 = Number(prompt("Informe a segunda nota"))
let nota3 = Number(prompt("Informe a terceira nota"))

let average = (nota1 + nota2 + nota3) / 3
 average = average.toFixed(2)

if (average < 6) {
    alert("Aluno reprovado")
} else if (average >= 6 && average < 7){
    alert("Aluno em recuperação")
} else {
    alert(nomeAluno + " aprovado com média " + average)
}
