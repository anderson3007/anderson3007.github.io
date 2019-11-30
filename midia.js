var 
  andarD = [ ],
  andarE = [ ],
  morrerD =[ ],
  morrerE =[ ],
  pararD = [ ],
  pararE = [ ],
  livro,
  tempo = 0,
  animacao = 0;

function preload() {
  livro = loadImage('img/livro.png');
  for (var i=0;i<=9;i++){
    andarD [i] = loadImage('img/run_direito/Run__00'+i+'.png');
    andarE [i] = loadImage('img/run_esquerdo/Runv__00'+i+'.png');
    morrerD[i] = loadImage('img/dead_direito/Dead__00'+i+'.png');
    morrerE[i] = loadImage('img/dead_esquerdo/Deadv__00'+i+'.png');
    pararD [i] = loadImage('img/idle_direito/Idle__00'+i+'.png');
    pararE [i] = loadImage('img/idle_esquerdo/Idlev__00'+i+'.png');
  }
}


function animaUse() {
  
  if (animacao == 1) {
      image(andarD[tempo%9], x, y, 30,30); 
  } else {
      
      if (animacao == 2) {
          image(andarE[tempo%9], x, y, 30,30);
      } else {

          if (animacao == 3) {
              image(morrerD[tempo%9], x, y, 30,30);           
          } else {

              if (animacao == 4){
                  image(morrerE[tempo%9], x, y, 30,30);           
              } else {
                  
                  image(pararD[tempo%9], x, y, 30,30);
                  
                }  
            }
        }  
    }
  tempo++;
}
