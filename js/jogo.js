let altura = 0;
let largura = 0;

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura,largura);
}
    
ajustaTamanhoPalcoJogo();

function posicaoRandomica(){
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //criando o elemento html
    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = 'mosquito1';
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute'; 

    document.body.appendChild(mosquito);
}