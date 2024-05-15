////////////////////////////////////////////////
/*

// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu a')

menu.forEach((item) => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach((item) => {
  item.classList.remove('ativo')
})

menu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const img = document.querySelectorAll('img');
img.forEach((item) => {
  console.log(item, item.hasAttribute('alt'))
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"')
link.setAttribute('href', 'hahahaha.com')

*/

///////////////////////////////////////////

/*
// Mostre no console cada parágrafo do site
const paragrafo = document.querySelectorAll("p");

paragrafo.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console

paragrafo.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
*/

////////////////////////////////////////////////////////

/*
// Retorne no console todas as imagens do site

const img = document.querySelectorAll('img')
console.log(img)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const animaisImg = document.querySelectorAll('img[src^="./img/imagem"]')

console.log(animaisImg)

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('a[href^="#"')
console.log(links)

// Selecione o primeiro h2 dentro de .animais-descricao
const ph2 = document.querySelector('.animais-descricao h2')
console.log(ph2.innerText)

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[--ultimoP.length])
*/

//////////////////////////////////////////////

// Retorne o url da página atual utilizando o objeto window

/*
const url = window.location.href
console.log(url) 

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const ativo = document.querySelector('.ativo')
console.log(ativo)

// Retorne a linguagem do navegador

const idioma = navigator.language
console.log(idioma)

// Retorne a largura da janela 

const width = window.innerWidth
console.log(width)
*/

/////////////////////////////////////////////////////

/*

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagem() {
  const imgs = document.querySelectorAll("img");
  let soma = 0

  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth
  });
  console.log(soma)
}

window.onload = function () {
  somaImagem();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkRect = link.getBoundingClientRect();
  const linkWidth = linkRect.width;
  const linkHeight = linkRect.height;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "atende ao tamanho mínimo recomendado.");
  } else {
    console.log(link, "não atende ao tamanho mínimo recomendado.");
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia("(max-width: 720px)").matches;
const menu = document.querySelector(".menu");
if (small) {
  menu.classList.add("menu-mobile");
}

*/

/////////////////////////////////////////////////////


/*
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll("a[href^='#'");

function handleAtivo(event) {
  event.preventDefault();
  links.forEach((item) => {
    item.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", handleAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todos = document.querySelectorAll('body *')

function todosClick(event) {
  console.log(event.currentTarget)
  }

todos.forEach(elemento => {
  elemento.addEventListener('click', todosClick)
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function todosClick(event) {
  console.log(event.currentTarget.remove())
  }

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleEvent(event){
  if(event.key === 't'){
    document.documentElement.classList.toggle('textoMaior')
  }
}

window.addEventListener('keydown', handleEvent) 

*/


/*

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const pdt = faq.querySelector('dt');
console.log(pdt);

// Selecione o DD referente ao primeiro DT

const pdd = pdt.nextElementSibling;
console.log(pdd)

// Substitua o conteúdo html de .faq pelo de .animais
const htmlContent = document.querySelector('.animais');

faq.innerHTML = htmlContent.innerHTML;


*/