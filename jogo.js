
var vetor = [];
var carregando=0;
var poseTime=0;
function preload() {
  for(var i=0; i<9; i++){
  vetor[i] = loadImage('img/run_direito/Run__00'+i+'.png');
  }
}
function setup() {
  
  createCanvas(1200, 540);
  
}

function draw() {
  background('#a1d391');
  for(j=0; j<9; j++){
  image(vetor[j], 100, 100, 50,50);
  }
}
