
let vetor = [];
var carregando=0;
var poseTime=0;
function preload() {
  for(var i=0; i<9; i++){
  vetor[i] = loadImage('img/run_direito/Run__00'+i+'.png');
  }
}
function setup() {
  frameRate(30);
  createCanvas(1200, 540);
  background('#a1d391');
  
}

function draw() {

  image(vetor[carregando%9];, 100, 100, 50,50);
  
  if(poseTime==5) {
     carregando++;
     poseTime=0;
  } else {
    poseTime++;
  }
  
}
