const patients = [
  {
    name: "Luiz",
    age: 21,
    weight: 100,
    height: 190,
  },

  {
    name: "João",
    age: 23,
    weight: 100,
    height: 180,
  },
  {
    name: "Maria",
    age: 21,
    weight: 70,
    height: 180,
  },
];



function imcPatients(patient) {
    alert(`
        Paciente ${patient.name} possui o IMC de :
        ${(patient.weight / ((patient.height/100)**2)).toFixed(2)}
    `)
}
for (patient of patients) {
    imcPatients(patient)
}