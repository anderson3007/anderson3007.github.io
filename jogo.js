let andarD= [ ]
let andarE=[ ]
let morrerD=[ ]
let morrerE=[ ]
let pararD=[ ]
let pararE=[ ]

function preload {
    for (var i=0;i<=9;i++){
        andarD[i]= loadImage('img/run_direito/Run__00'+i+'.png');
    }

}

function setup() {
  createCanvas(1200, 540);
}


function draw() {
  
  background(200);
  fill(250,250,250);
  for(var j=0; j<=9; j++) {
      image(andarD[j],100, 100, 30,30);
    }
  
}

  
  
