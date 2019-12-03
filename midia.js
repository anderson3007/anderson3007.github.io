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
        image(andarD[velocidade], x, y, 30,30); 
  } 
      
  else if (animacao == 2) {
        image(andarE[velocidade], x, y, 30,30);
  } 

  else if (animacao == 3) {
        image(morrerD[velocidade], 500, 200, 90,90);
        alert("velocidade  "+velocidade+"   tempo:  "+tempo);
  } 

  else if (animacao == 0){
        image(pararD[velocidade], x, y, 30,30);    
  }          
            
  
  
  if (tempo>3) {
        velocidade++;
        tempo=0;
  } 
  else {
          tempo++;
  }


  if (velocidade >=8) {
        velocidade=0;
  }
 

  
}


function fase1() {

      rect(10, 555, 900, 65, 10);
      textSize(30);
      fill('black');
      text('Qual das imagens a seguir representa uma descoberta importante\n no período Paleolítico (pré-história).....', 10, 555);

}



