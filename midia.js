var 
  andarD = [ ],
  andarE = [ ],
  morrerD =[ ],
  pararD = [ ],
  livro,
  tempo = 0,
  velocidade=0,
  animacao = 0;
var m=0,t=0;

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
             
              fill('#E4E7E7');
              stroke('white');
              strokeWeight(1);
              rect(350, 100, 500, 300, 10);
              image(morrerD[i%9], 450, 100, 70,70);
             if(t>4){
                m++;
                t=0;
              } else{
                t++
              }
              }
          } else {
              image(pararD[m%9], x, y, 30,30);    
            }
        }  
    }

  if (tempo>3) {
    velocidade++;
    tempo=0;
  } else {
      tempo++;
    }
}
var 
  andarD = [ ],
  andarE = [ ],
  morrerD =[ ],
  pararD = [ ],
  livro,
  tempo = 0,
  velocidade=0,
  animacao = 0;
var m=0,t=0;

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
             
              fill('#E4E7E7');
              stroke('white');
              strokeWeight(1);
              rect(350, 100, 500, 300, 10);
              image(morrerD[0], 450, 100, 70,70);
              
          } else {
              image(pararD[velocidade%9], x, y, 30,30);    
            }
        }  
    }

  if (tempo>3) {
    velocidade++;
    tempo=0;
  } else {
      tempo++;
    }
}
