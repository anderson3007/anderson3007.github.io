let img=[];
function preload() {
  for(var i=0; i<9; i++){
  img[i] = loadImage('img/run_direito/Run__00'+i+'.png');
  }
}


function setup() {
  createCanvas(1200, 540);
  for(var j=0; j<9; j+=0.1){
   image(img[j], 110, 110,50,50);
  }
}


function draw() {
  
}

  
  
