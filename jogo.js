
let vetor =[];
var carregando=0;
let boneco;
function preload() {
  for(var i=0; i<9; i++){
  vetor[i] = loadImage('img/run_direito/Run__00'+i+'.png');
  }
}
function setup() {
  createCanvas(1200, 540);
  
}

function draw() {
  boneco = vetor[carregando];
  
  if(carregando ==8){
    carregando = 0;
  }
  carregando++;
}
