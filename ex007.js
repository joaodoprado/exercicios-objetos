



const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            numero: 0,
            nome: "O loop do hábito",
        },
        {
            numero: 0,
            nome: "O cérebro ansioso",
        },
        {
            numero: 0,
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            numero: 0,
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            numero: 0,
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            numero: 0,
            nome: "O poder de uma crise",
        },
        {
            numero: 0,
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            numero: 0,
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            numero: 0,
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}
let contador = 0

for (capitulo of livro.capitulos) {
    contador < livro.capitulos.length; contador++
    if (capitulo.numero <= contador) {
        capitulo.numero = contador
    }
}


console.log(livro)