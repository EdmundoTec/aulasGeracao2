

// Conseguir o documento como se fosse um objeto

// Manipular melhor os elementos da TextTrackList


// Uma forma de selecionar o elemento pelo ID
// NodeList

let conteudo = document.getElementById('card');
let paragrafo = document.getElementsByTagName('p');
let selecionar = document.getElementsByClassName('cardSection');

let navegacao = document.querySelector("#menu");
let menu = document.querySelectorAll('.conteudoMenu > a');
let cabeçalho = document.getElementById ('header');
let conteudoSection = document.getElementById('conteudoNovo');

console.log(conteudo);
console.log(paragrafo);
console.log(typeof conteudo);
console.log(selecionar);
console.log(navegacao);
console.log(typeof navegacao);
console.log(menu);
menu.forEach((item)=>{
   console.log(item)});
cabeçalho.classList.add('novoCard');

function show(){
   alert(`Você clicou aqui`);
}
function cardVermelho(){
   conteudoSection.innerHTML =

`
<span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi adipisci,
      harum dolorum quasi deserunt repudiandae, quibusdam molestias blanditiis 
      placeat beatae ex! Eos quasi esse in nam incidunt veniam ex mollitia.
</span>
`;

conteudoSection.classList.add('cardVermelho');

}

