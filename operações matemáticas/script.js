/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/
let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

const sum = (Number(firstNumber) + Number(secondNumber))
alert('Soma: ' + sum)
const sub = (Number(firstNumber) - Number(secondNumber))
alert('Subtração: ' + sub)
const multi = (Number(firstNumber) * Number(secondNumber))
alert('Multiplicação: ' + multi)
const div = (Number(firstNumber) / Number(secondNumber))
alert('Divisão: ' + div)
const restDiv = (Number(firstNumber) % Number(secondNumber))
alert('Resto da divisão: ' + restDiv)

