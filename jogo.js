
let vetor = [];
var carregando=0;
let boneco;
function preload() {
  for(var i=0; i<9; i++){
  vetor[i] = loadImage('img/run_direito/Run__00'+i+'.png');
  }
}
function setup() {
  createCanvas(1200, 540);
  background('#a1d391');
  
}

function draw() {
  boneco = vetor[carregando];
  image(boneco, 100, 100, 50,50);
  carregando++;
  if(carregando > 9){
    carregando = 0;
  }
  
}
