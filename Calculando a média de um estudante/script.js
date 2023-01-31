/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let namee = prompt("Qual o nome do(a) aluno(a)?")
let nt1 = prompt("Qual a nota da primeira prova?")
let nt2 = prompt("Qual a nota da segunda prova?")
let nt3 = prompt("Qual a nota da terceira prova?")

let average = (Number(nt1)+ Number(nt2)+Number(nt3))/3
average = average.toFixed(2)
let resultgood= average >= 6

if(resultgood){
 alert("Parabéns, " + namee + "! Sua média foi de: " + average)
}else {
  alert(namee + " estude para sua prova de recuperação! Sua média foi de: " +  average)
}



