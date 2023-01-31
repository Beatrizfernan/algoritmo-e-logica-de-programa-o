/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */


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





function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }
  
  function printPatientIMC(patient) {
    return `
      Paciente ${patient.name} possui o IMC de
      ${IMC(patient.weight, patient.height)}
    `
  }
  
  for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
  }