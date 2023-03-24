var imagem = document.getElementById("rodape");
var velocidadeX = Math.random() * 10;
var velocidadeY = Math.random() * 10;
var x = Math.random() * (window.innerWidth - imagem.offsetWidth);
var y = Math.random() * (window.innerHeight - imagem.offsetHeight);

setInterval(function() {
  // Atualizar a posição da imagem
  x += velocidadeX;
  y += velocidadeY;
  imagem.style.left = x + "px";
  imagem.style.top = y + "px";
  
  // Detectar quando a imagem atinge as bordas do site
  if (x < 0 || x > (window.innerWidth - imagem.offsetWidth)) {
    velocidadeX *= -1;
  }
  if (y < 0 || y > (window.innerHeight - imagem.offsetHeight)) {
    velocidadeY *= -1;
  }}, 39); // Intervalo de atualização de posição aleatória a cada 39 milissegundos