// 1) Cadastro de Imóveis
// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações:
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.



// let imoveisCadastrados = [];
// let opcoes = "";

// do {

//     opcoes = prompt(
//         `Bem vindos ao cadastro de imoveis
//         Total de imoveis ${imoveisCadastrados.length} \n
        
//          Escolha uma opção \n

//          1 - Novo imovel.
//          2 - Listar Imoveis.
//          3 - Sair.
//         `
//     )

//     switch (opcoes) {
//         case "1": 

//             let imovel = {};

//             imovel.nome = prompt(`Qual o nome do proprietario? `)
//             imovel.quartos = parseInt(prompt(`Quantos quartos possui o Imovel? `))
//             imovel.banheiro = parseInt(prompt(`Quantos banheiros possui o Imovel? `))
//             imovel.garagem = prompt(`O Imovel pssui garagem Sim/Não `)

//             let salvarImovel = confirm(
//                 `Deseja salvar Este imovel? \n
//                 Proprietario: ${imovel.nome} 
//                 Quartos: ${imovel.quartos} 
//                 Banheiros: ${imovel.banheiro}
//                 Garagem: ${imovel.garagem} 
//                 `
//             )

//             if(salvarImovel){
//                 imoveisCadastrados.push(imovel)
//             }
//             break;
//         case "2":
//             if (imoveisCadastrados.length === 0) {
//                 alert(`Não existe imoveis cadastrados`)
//             } else {
//                 for(let i = 0; i < imoveisCadastrados.length; i++){
//                     alert(
//                       `Imoveis:

//                        Proprietario: ${imoveisCadastrados[i].nome} \n
//                        Quartos: ${imoveisCadastrados[i].quartos} \n
//                        Banheiros: ${imoveisCadastrados[i].banheiro} \n
//                        Garagem: ${imoveisCadastrados[i].garagem} \n
//                         `
//                     )
//                 }
//             }
//             break;
//         case "3":
//             alert("saindo do programa")
//             break;
//         default:
//             alert("Opção invalida")
//             break;
//     }
// } while (opcoes != "3");





// function saudacao(){
//     console.log(`Ola menino`);
// }

// saudacao()

const saudacao = () => {
    console.log(`Olá Mundo alguma coisa`)
}

saudacao()


// alert()
// confirm()
// prompt()
// Number()