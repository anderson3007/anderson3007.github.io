let andarD= [ ]
let andarE=[ ]
let morrerD=[ ]
let morrerE=[ ]
let pararD=[ ]
let pararE=[ ]

function preload {
    for (var i=0;i<=9;i++){
        andarD[i]= loadImage('img/run_direito/Run__00'+i+'.png');
        andarE[i]= loadImage('img/run_esquerdo/Runv__00'+i+'png');
        morrerD[i]= loadImage('img/dead_direito/Dead__00'+i+'png');
        morrerE[i]= loadImage('img/dead_esquerdo/Deadv__00'+i+'png');
        pararD[i]= loadImage('img/idle_direito/Idle__00'+i+'png');
        pararE[i]= loadImage('img/idle_esquerdo/Idlev__00'+i+'png');
    }

}

