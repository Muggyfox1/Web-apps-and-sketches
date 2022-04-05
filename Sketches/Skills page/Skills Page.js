//Variables
let c = document.querySelector("#c");
let ctx = c.getContext("2d");
updateCanvas();

let mousePosition = {"x":0,"y":0};
let DRAW_INTERVAL = 10;

let particles = [];
particles.push(Particle("red", Math.random() * 10));
particles.push(Particle("blue", Math.random() * 10));
particles.push(Particle("green", Math.random() * 10));
particles.push(Particle("yellow", Math.random() * 10));
particles.push(Particle("cyan", Math.random() * 10));
particles.push(Particle("purple", Math.random() * 10));
particles.push(Particle("red", Math.random() * 10));
particles.push(Particle("blue", Math.random() * 10));
particles.push(Particle("green", Math.random() * 10));
particles.push(Particle("yellow", Math.random() * 10));
particles.push(Particle("cyan", Math.random() * 10));
particles.push(Particle("purple", Math.random() * 10));


//Set up functions
setInterval(drawFrame, DRAW_INTERVAL);
c.addEventListener("mousemove",updateMouse);

//Functions
function drawFrame(){
    //update width and height of canvas
    updateCanvas();

    //draw background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c.width + 10, c.height + 10); //+ 10 because of white edges that may appear.
    
    //update and draw particles

    particles.forEach(p => {
        updateParticle(p);
        drawParticle(p);
    });

}

function updateCanvas(){
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}

function updateMouse(e){
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
}

function drawParticle(p){
    if(p.size > 0){
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.ellipse(p.position.x, p.position.y, 
                    p.size, p.size,
                    0, 0, 2*Math.PI);
        ctx.fill();
    }
}

//Particle methods
function Particle(color, startSize){
    return {color:color, 
            size:startSize, 
            position:{x:Math.random() * c.width, y:Math.random() * c.height},
            shrinking:false};
}

function updateParticle(p, i){
    let changeValue = .025;
    p.size -= p.shrinking? -changeValue: changeValue;
    if(p.size <= 0 || p.size >= 10){
        p.shrinking = !p.shrinking;
    }

    if(p.size <= 0){
        p.position = {x:Math.random() * c.width, y:Math.random() * c.height};
    }
}
