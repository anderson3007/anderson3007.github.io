let img=[];
var j=0;
function preload() {
  for(var i=0; i<9; i++){
  img[i] = loadImage('img/run_direito/Run__00'+i+'.png');
  }
}


function setup() {
  createCanvas(1200, 540);
}


function draw() {
    j = j+0.1;
   image(img[j], 110, 110,50,50);
    if(j==10){
      j=0;
    }
}

  
  
