const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
const pets = usuarios


for(pessoa of usuarios) {
    const {nome, pets} = pessoa
    let contador = pets.length 
    if (contador == 0) {
        console.log(`Sou ${nome} e não tenho pets`)
    } else if (contador == 1) {
        console.log(`Sou ${nome} e tenho ${contador} pet`)
    } else {
        console.log(`Sou ${nome} e tenho ${contador} pets`)
    }
}