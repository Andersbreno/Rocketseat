alert('Vamos realizar as operações com números')
let numberOne = Number(prompt('Informe o primeiro número'))
let numberTwo = Number (prompt('Informe o segundo número'))

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let multi = numberOne * numberTwo;
let div = numberOne / numberTwo;
let rest = numberOne % numberTwo;

alert(`A soma dos dois números é ${sum}`)
alert(`A subitração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${multi}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da duvisão é ${rest}`)

if (sum % 2 == 0) {
    alert('A soma soma dos dois números é par')
} else {
    alert('A soma dos dois números é ímpar')
}




