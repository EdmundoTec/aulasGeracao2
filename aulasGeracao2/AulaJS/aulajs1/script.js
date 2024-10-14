var idade = 28;


// string

// number

// array

// object

// boolean

// and, or, not


// let ibade = 18;


// if(idade >= 18 && idade <= 21){
//     console.log("Pode entrar")
// }

// let carteira = true;
// let idade = 18;


// if(idade >= 18 && carteira == true){
//     console.log("Pode dirigir")
// } else if(idade >= 18 || carteira == true){
//     console.log("Você tem idade de dirigir")
// } else {
//     console.log("Não pode fazer nada")
// }



// let nome = true;


// if(!nome){
//     console.log("Nome, não encotrado")
// } else {
//     console.groupCollapsed("Pode acessar")
// }


// let diasDaSemana = prompt("Digite um numero pro dia da semana");


// switch(diasDaSemana){
//     case 1:
//         alert("Você selecionou o domingo")
//         break;
//     case 2:
//         alert(Você selecionou a seguda-feira)
//         break;
//     default:
//         alert("valor não encontrado")
//         break;
// }



// let contagem = 0;

// while(contagem <= 10){
//     console.log(contagem)
//     contagem ++;
// }



// for(let contagem = 0; contagem <= 10; contagem ++){
//     console.log(contagem)
// }




// let velocidade = 0;

// do{
//     console.log("A velocidade do carro é de ", velocidade)
//     velocidade -= 20
// } while(velocidade > 0)

// console.log("valor final ", velocidade)



// let name = prompt("Olá, qual é o seu nome: ");
// let city = "";
// let contagem = 0;

// let continuar = prompt("Você visitou alguma cidade? Sim/Não: ");

// while(continuar == "sim"){
//     let citys = prompt("qual cidade você visitou? ")
//     city += '-' + citys + '\n'
//     contagem ++
//     continuar = prompt("Visitou mais alguma cidade? Sim/Não: ")
// }
// alert(`o turista ${name} visitou ${contagem} cidades e as cidades foram ${city}`);


// for(let contagem = 0; contagem <=100; contagem ++){
//     if(contagem % 2 === 0){
//         if( contagem % 3 === 0){
//             console.log(`${contagem} é par e multiplo de 3`)
//         }
//         if (contagem % 5 === 0){
//             console.log(`${contagem} é par e multiplo de 5`)
//         }
//         if (contagem % 7 === 0) {
//             console.log(`${contagem} é par e multiplo de 7`)
//         }
        
//     } else {
//         if( contagem % 3 === 0){
//             console.log(`${contagem} é impar e multiplo de 3`)
//         }
//         if (contagem % 5 === 0){
//             console.log(`${contagem} é impar e multiplo de 5`)
//         }
//         if (contagem % 7 === 0) {
//             console.log(`${contagem} é impar e multiplo de 7`)
//         }
//     }
    
// }	


// Aula de (Terça) 01.10.24


// // function soma(){

// // }


// // let lista = ["David", 2, true, soma(), undefined];


// // console.log(lista);


// let p = []

// let personagens = ['Frodo', 'Gendalf', 'Pippin', 'Aragorn', 'Legolas'];


// // Push : adiciona dados no final do array

// personagens.push('Boromir')

// console.log(personagens)

// // unshift: adiciona dados no inicio do array

// personagens.unshift('Sauron');

// console.log(personagens)


// // pop : retira o ultimo elemento do array

// personagens.pop('Boromir');
// console.log(personagens);

// // shift: retira o primeiro dado do array

// personagens.shift('Sauro');
// console.log(personagens)

// // include: verifica se um certo elemento está presente no array
// let procura = personagens.includes('Gendalf');

// console.log(procura)

// // indexOf: Procura indice do elemento no array
// let procuraIndice = personagens.indexOf('Frodo');

// personagens[1] = 'Gandolf o Cinzento';

// console.log(procuraIndice);

// console.log(personagens)


// let selecaoPersonagem = personagens.slice(0, 4);

// console.log(selecaoPersonagem)pa

// let outrasSelecao = personagens.slice(-4)

// console.log(personagens)
// console.log(outrasSelecao)




// 1) - Escreva um programa em  javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
// fila.push	 


// R: - let fila = [];
// let opcao = "";


// do {
//     let juntarPaciente = fila.join(" - ");
//     opcao = prompt(`
//        \n Lista de pacientes: ${juntarPaciente}  
//        \n Escolha uma opção
//        \n1 - Novo paciente
//        \n2 - Consultar paciente
//        \n3 - Sair ....
//     `)

//     switch (opcao) {
//         case "1":
//             let novoPaciente = prompt(`Digite o nome do paciente`);
//             fila.push(novoPaciente);
//             break;
//         case "2":
//             let pacienteConsultado = fila.shift();
//             if(!pacienteConsultado){
//                 alert("Não existe paciente na fila");
//             } else {
//                 alert(`O ${pacienteConsultado} foi consultado`);
//             }
//             break;
//         case "3":
//             alert(`Programa encerrado`)
//             break;
//         default:
//             break;
//     }
    
// } while (opcao != "3");

// aula (Quarta) 02.10.2024



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

console.log()

const novoDevs = {
    nome: "Matheus",
    idade: 25,
    profissao: "Dev mobile",


}