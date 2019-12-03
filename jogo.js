let map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  
];

let boneco;
// cordenada do cursor menu

//posição inicial do boneco
    x = 600;
    y = 470;

var bloco1=50,
    bloco2=500,
    bloco3=1100,
    b1=0,
    b2=0,
    b3=0;
var tentativas=3;
var opcoes = [0,1];
var tileSize=30;
var voltar = 0;
var testeVida =3;
var conteteste = 0;


function jogar() {
  
  cenario();
  
   if (keyIsDown(LEFT_ARROW) && !bateuNoMapa(x-3,y)) {    
        if (colisaoBloco(x,y)) {
              tentativas--;
              animacao = 3;
              if (tentativas==0) {
                    voltar = 1;
              } else {
                      x = 600;
                      y = 470;
                }
        } 
        animacao = 2
        x-=3;   
  } else{
      if (keyIsDown(RIGHT_ARROW) && !bateuNoMapa(x+3,y) ) { 
        if (colisaoBloco(x,y)) {
          tentativas--;
          animacao = 3;
          
          if (tentativas==0) {
             voltar = 1;
          } else {
              
              x = 600;
              y = 470; 
            }
        } 
        animacao = 1
        x+=3;   
      } else{
            if (keyIsDown(UP_ARROW) && !bateuNoMapa(x,y-5) ) {
                  if (colisaoBloco(x,y)) {
                        tentativas--;
                        animacao = 3;
                        if (tentativas==0) {
                              voltar = 1;
              } else {
                
                  x = 600;
                  y = 470;
                }
            } 
            
            y-=5;
            
          } else{
                  if (keyIsDown(DOWN_ARROW) && !bateuNoMapa(x,y+5) ){
                    if (colisaoBloco(x,y)){
                      tentativas--;
                      animacao = 3;
                      
                      if (tentativas==0) {
                        
                        voltar = 1;
                      } else{
                        
                          x = 600;
                          y = 470;
                        }
                    } 
                    
                    y+=5;
                  } else{
                    if (colisaoBloco(x,y)) {
                        tentativas--;
                        animacao = 3;

                        
                        if (tentativas==0) {
                          voltar = 1;
                        } else{ 
                                                
                            x = 600;
                            y = 470;
                          }    
                    }
                  }
          }
        }
    }
  
  if (bloco1<1150 && b1==0) {
    bloco1 = bloco1+5;
  } else{
      b1=1;
      bloco1=bloco1-5
      if (bloco1==30) {
        b1=0
      }
    }


  if (bloco2<1150 && b2==0) {
    bloco2 = bloco2+5;
  } else{
      b2=1;
      bloco2=bloco2-5
      if (bloco2==30) {
        b2=0
      }
    }


  if (bloco3<1150 && b3==0) {
    bloco3 = bloco3+5;
  } else{
      b3=1;
      bloco3=bloco3-5
      if (bloco3==30) {
        b3=0
      }
    }

  if(testeVida>tentativas){
    animaUse();
    conteteste++;
    if(conteteste==8){
      testeVida = tentativas;
      conteteste = 0;
      alert("perdeu");
    }
  }else{
    animaUse();
    animacao = 0;
  }
  
  fill(0, 0, 204);
  rect(bloco1, 390,20, 30);
  rect(bloco2, 330,20, 30);
  rect(bloco3, 270,20, 30);

 
  function bateuNoMapa(a, b) {
    let bateu=false; 
      for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
          if (map[i][j]==1 && colisaoMapa(a,b,j * tileSize,i * tileSize)){
            bateu=true;
            
          }
        }
      }
      return bateu;
  }
     

  function colisaoMapa(x1,y1,x2,y2) {
    if(x1 > x2 + 25)
      return false;
    if(y1 > y2 + 25)
      return false;
    if(x1 + 25 < x2)
      return false;
    if(y1 + 25 < y2)
      return false;
    return true;
    
   }

 function colisaoBloco(a,b) {
    if ( ( (bloco1+20>=a && bloco1-20<a) || (bloco1-20<=a && bloco1+20>a) ) && (b>385 && b<395) )
      return true;
    if ( ( (bloco2+20>=a && bloco2-20<a) || (bloco2-20<=a && bloco2+20>a) ) && (b>325 && b<335) )
      return true;
    if (( (bloco3+20>=a && bloco3-20<a) || (bloco3-20<=a && bloco3+20>a) ) && (b>265 && b<275) )
      return true;
    return false;
 }

 function cenario(){

  background(200);
  fill(250,250,250);
  
  for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] != 0) {
          rect(j * tileSize, i * tileSize, tileSize, tileSize);
        }
      }
    }
    fill('#ffc000');
    stroke('white');
    strokeWeight(1);
    rect(1000, 550, 100, 40, 10);
    textSize(10);
    fill('white');
    text('tentativas:'+tentativas, 1000, 555);
  }

  if(voltar== 1){ 
    alert("vc é muito lerdo. perdeu otário!");
    voltar = 0;
    voltarMenu();
  }



}





