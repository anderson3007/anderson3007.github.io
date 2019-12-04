
var x_menu = 445,
    y_menu = 95,
	  opcao = 1 ,
	  telaAtiva = 0;

function setup() {
  createCanvas(1200, 630);
}


function draw() {

  switch(telaAtiva) {
    case 0:
      menu();
      break;
    case 1:
      jogar();
      break; 
    case 2:
      regras();
      break;  
    case 3:
      sair();
      break;
  }
}


function menu() {
  //código rgb
  background('#A1D391');
  image(livro, 310, 300, 600, 200);
  
   
  fill('#ffc000');
  stroke('white');
  strokeWeight(1);
  rect(450, 100, 300, 55, 10);
  rect(450, 170, 300, 55, 10);
  rect(450, 240, 300, 55, 10);
  
  textSize(32);
  fill('white');
  
  text('Jogar', 560, 140);
  text('Regras', 560, 210);
  text('Sair', 560, 280);
  
  noFill();
  //stroke(255, 0, 0);
  strokeWeight(1);
  rect(x_menu, y_menu, 310, 65,10);
}


function voltarMenu() {
  fase = 1;
  tentativas=3;
  x=600;
  y=470;
  telaAtiva=0;
}


function regras() {
   
  background('#A1D391');
  fill('#FFC000'); 
  stroke('white');
  strokeWeight(1);
  rect(250, 100, 700, 400, 10);
  textSize(40);
  fill('white');
  text('REGRAS:', 530, 150);
  textSize(30);
  fill('white');
  text('1:  Direcione o boneco até a resposta correta;\n2:  Evite bater nos blocos, ao bater neles suas\n chances irão diminuir;',300, 300);
  

}


function sair() {
   
  background('#A1D391');
   
  //fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('saindo', 40, 55);
  window.close();
}


function keyPressed() {
  console.log(keyCode);
  
  if (keyCode === ESCAPE)
    telaAtiva = 0;
  if (keyCode === ENTER) 
    telaAtiva=opcao;
     
  if (keyCode === DOWN_ARROW) {
    if (y_menu<230) {
      y_menu+=70;
      if (opcao==1)
        opcao=2;
      else if (opcao==2)
          opcao=3; 
    } 
  } else if (keyCode === UP_ARROW) {
    if (y_menu>95) {
       y_menu-=70;
       if (opcao==2) {
         opcao=1;
       } else { 
          if (opcao==3) {
           opcao=2;
          }
         }
    }
   
    }
}
