const studentTests = {
    aluno01:{
        name: 'Anderson',
        firstTestNote: 5,
        secondTestNote: 6,
    }, 
    aluno02: {
        name:'Breno',
        firstTestNote: 7,
        secondTestNote: 9,
    },
    aluno03: {
        name: 'Walbya',
        firstTestNote: 4,
        secondTestNote: 10,
    }
}

const average = (firstNote, secondNote) => (firstNote + secondNote) / 2

for (let objectStudent in studentTests) {
    let student = studentTests[objectStudent]
    let averageStudent = average(student.firstTestNote, student.secondTestNote)
    if (averageStudent >= 7){
        alert(`Parabéns, ${student.name}, você foi aprovado no concurso`)
    } else {
        alert(`${student.name}, infelizmente você não foi aprovado. Tente novamente.`)
    }
}