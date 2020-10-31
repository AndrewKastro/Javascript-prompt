let nome = prompt('Digite seu nome');
let idade = prompt('Digite a sua idade');
let pais = prompt('Qual é seu país de origem?');
let cidade = prompt('Qual sua cidade de nascimento?');
let comida = prompt('Qual sua comida favorita?');
let animal = prompt('Qual seu animal favorito?');
; 

const anoatual = new Date();
const datadenascimento = anoatual.getFullYear() - Number(idade);


document.getElementById('conteudo').innerHTML = `<h2>Olá ${nome} soube que você tem ${idade} anos.<br> você nasceu em ${pais} e na cidade de ${cidade}.<br>Que legal!!!<h2/><h3><h2>A sua comida favorita é ${comida}, Nossa! Que delíciaaaa e sem esquecer que seu animal favorito é ${animal} que também é o meu!!</h2>Minhas matemáticas não são muito boa mas acho que voce nasceu no ano ${datadenascimento} certo?.</h3><h4>Que legal a gente ter se conhecido! Espero voltemos a falar! </h4>`;
;
console.log(nome, idade, pais, cidade, comida, animal, datadenascimento)
