var 
  andarD = [ ],
  andarE = [ ],
  morrerD =[ ],
  morrerE =[ ],
  pararD = [ ],
  pararE = [ ],
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
    morrerE[i] = loadImage('img/dead_esquerdo/Deadv__00'+i+'.png');
    pararD [i] = loadImage('img/idle_direito/Idle__00'+i+'.png');
    pararE [i] = loadImage('img/idle_esquerdo/Idlev__00'+i+'.png');
  }
}


function animaUse(animacao) {
  
  if (animacao == 1) {
      image(andarD[velocidade%9], x, y, 30,30); 
  } else {
      
      if (animacao == 2) {
          image(andarE[velocidade%9], x, y, 30,30);
      } else {

          if (animacao == 3) {
              image(morrerD[velocidade%9], x, y, 30,30);           
          } else {

              if (animacao == 4){
                  image(morrerE[velocidade%9], x, y, 30,30);           
              } else {
                  
                  image(pararD[velocidade%9], x, y, 30,30);
                  
                }  
            }
        }  
    }
  if (tempo>5) {
    velocidade++;
    tempo=0;
  } else {
      tempo++;
    }
    
}
