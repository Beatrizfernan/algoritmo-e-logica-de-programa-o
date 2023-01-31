/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
    {
    name: "Beatriz",
    age: 20,
    weight: 100,
    height: 190,
},

{
    name: "Roberta",
    age: 30,
    weight: 110,
    height: 200,
},
{
    name: "Larissa",
    age: 27,
    weight: 170,
    height: 160,
},

]

const patientsNames= []

for(let patient of patients) {
patientsNames.push("Name= "+ (patient.name) + " Idade= " +(patient.age)+ " Peso= " + (patient.weight)+" Altura= " + (patient.height))
  }
  
  alert("Dados: "+ patientsNames)