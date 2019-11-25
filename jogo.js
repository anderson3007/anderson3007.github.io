let andarD= [ ]
let andarE=[ ]
let morrerD=[ ]
let morrerE=[ ]
let pararD=[ ]
let pararE=[ ]

function preload {
        img = loadImage('img/livro.png');
    for (var i=0;i<=9;i++){
        andarD[i]= loadImage('img/run_direito/Run__00'+i+'.png');
        andarE[i]= loadImage('img/run_esquerdo/Runv__00'+i+'png');
        morrerD[i]= loadImage('img/dead_direito/Dead__00'+i+'png');
        morrerE[i]= loadImage('img/dead_esquerdo/Deadv__00'+i+'png');
        pararD[i]= loadImage('img/idle_direito/Idle__00'+i+'png');
        pararE[i]= loadImage('img/idle_esquerdo/Idlev__00'+i+'png');
    }

}

function setup() {
  createCanvas(1200, 540);
}


function draw() {
  
  background(200);
  fill(250,250,250);
  for(var j=0; j<=9; j++) {
      image(andarD[j], x, y, 30,30);
    }
  
}

  
  
