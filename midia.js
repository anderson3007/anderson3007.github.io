var 
  andarD = [ ],
  andarE = [ ],
  morrerD =[ ],
  pararD = [ ];

var 
  livro,
  fogo,
  pc,
  maquina;

var 
  ama,
  nilo,
  praia;

var 
  img01,
  img02,
  img03;

function preload() {
  
      livro   = loadImage('img/livro.png');
      fogo    = loadImage('img/perguntas/fase1/fogo.jpg');
      pc      = loadImage('img/perguntas/fase1/pc.jpg');
      maquina = loadImage('img/perguntas/fase1/maquina.jpg');

      ama = loadImage('img/perguntas/fase2/ama.jpg');
      nilo = loadImage('img/perguntas/fase2/nilo.jpg');
      praia = loadImage('img/perguntas/fase2/praia.jpg');

      img01 = loadImage('img/perguntas/fase3/img01.jpg');
      img02 = loadImage('img/perguntas/fase3/img02.jpg');
      img03 = loadImage('img/perguntas/fase3/img03.jpg');
      
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

      image(fogo, 90, 30, 330,150);
      image(pc, 450, 30, 300,150);
      image(maquina, 780, 30, 310,160);

      rect(10, 545, 900, 70, 10);
      textSize(20);
      fill('black');
      text('Qual das imagens a seguir representa uma descoberta importante no período Paleolítico\n (pré-história).....', 15, 570);

}

function fase2() {
      image(ama, 90, 30, 330,150);
      image(nilo, 450, 30, 300,150);
      image(praia, 780, 30, 310,160);

      rect(10, 545, 900, 70, 10);
      textSize(20);
      fill('black');
      text('Quais das imagens a seguir representa o rio Nilo?', 15, 570);

  
}

function fase3() {
      image(img01, 90, 30, 330,150);
      image(img03, 450, 30, 300,150);
      image(img02, 780, 30, 310,160);

      rect(10, 545, 900, 70, 10);
      textSize(20);
      fill('black');
      text('Quais das imagens a seguir representa os túmulos  construídos em pedra para abrigar os \ncorpos dos faraós?', 15, 570);

  
}
function fase4() {
      
}
function fase5() {
  // body...
}



