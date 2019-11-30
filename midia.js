var 
  andarD = [ ],
  andarE = [ ],
  morrerD =[ ],
  pararD = [ ],
  livro,
  tempo = 0,
  velocidade=0,
  animacao = 0;

function preload() {
  livro = loadImage('img/livro.png');
  for (var i=0;i<=8;i++){
    andarD [i] = loadImage('img/run_direito/Run__00'+i+'.png');
    andarE [i] = loadImage('img/run_esquerdo/Runv__00'+i+'.png');
    morrerD[i] = loadImage('img/dead_direito/Dead__00'+i+'.png');
    pararD [i] = loadImage('img/idle_direito/Idle__00'+i+'.png');
    
  }
}


function animaUse() {
  
  if (animacao == 1) {
      image(andarD[velocidade%8], x, y, 30,30); 
  } else {
      
      if (animacao == 2) {
          image(andarE[velocidade%8], x, y, 30,30);
      } else {

          if (animacao == 3) {
            background('#A1D391');
            fill('#ffc000');
            stroke('white');
            strokeWeight(1);
            rect(450, 100, 900, 500, 10);

            for (i=0; i<=8; i++) {
              alert("dsd")
              image(morrerD[i%8], 450, 100, 70,70);           
            }
            
          } else {
              image(pararD[velocidade%8], x, y, 30,30);    
            }
        }  
    }

  if (tempo>3) {
    velocidade++;
    tempo=0;
  } else {
      tempo++;
    }
    animacao=0;
    return true;
}
