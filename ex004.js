const usuarios = [
    {
        nome: "João",
        idade: 25,
        maior_idade: "" 
    },
    {
        nome: "Ana",
        idade: 18,
        maior_idade:""
    },
    {
        nome: "Beatriz",
        idade: 15,
        maior_idade:""
    },
    {
        nome: "Carlos",
        idade: 16,
        maior_idade:""
    },
    {
        nome: "Antonio",
        idade: 32,
        maior_idade:""
    },
]

for (pessoa of usuarios) {
    if (pessoa.idade > 17) {
        pessoa.maior_idade = true
    } else {
        pessoa.maior_idade = false
    }
}
console.log(usuarios)