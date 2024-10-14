// function saudarUsuario(nome = "David"){
//     console.log(`Olá Senhor ${nome}`)
// }


// saudarUsuario("João")

// criar uma função que retorne o dobro de numero

// function dobro(numero = 30){
//     console.log(`O dobro do numrero ${numero} é igual a ${numero * 2}`)
// }

// dobro(30);

// let number1 = parseInt(prompt(`Digite o primeiro numero: `))
// let number2 = parseInt(prompt(`Digite o segundo numero: `))

// function somarNumeros(){
//     console.log(`A soma dos numeros são ${number1 + number2}`)
// }

// somarNumeros()




// function mediaDoAluno(num1, num2){
//     let media = (num1 + num2) / 2
//     return media
    
// }
// let mediaFinal = mediaDoAluno(10,10)

// console.log(mediaDoAluno (9,9))
// console.log(mediaFinal)




// function cadastrarUsuario(validacao){

// }

// function validacao(){
//     console.log(`Validar o usuario`)
// }

let conteudoDiv = document.getElementById("conteudo")

let listaDevs = [
    {
        nome: "David",
        idade: 29,
        profissao: "DevFront",
        tecnologias: ["React", "Next", "TailWind"]
    },
    {
        nome: "Eduardo",
        idade: 22,
        profissao: "Dev Java",
        tecnologias: ["Spring", "Hibernate"]
    },
    {
        nome: "Bryan",
        idade: 25,
        profissao: "Dev Mobile",
        tecnologias: ["React-Native", "Styled-component", "TailWind"]
    }
]

console.log(listaDevs)


// call back e função anonima, precissam passar um parametro a 
// Esse parametro serve pra gente criar um novo array


listaDevs.map(function(cadaDev){
    console.log(cadaDev);
})

listaDevs.map(()=>{

})