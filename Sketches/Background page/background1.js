//Variables
let c = document.querySelector("#c");
let ctx = c.getContext("2d");
updateCanvas()

let mousePosition = {"x":0,"y":0};
let DRAW_INTERVAL = 10;

let particles = [];
particles.push(Particle("red",10));
particles.push(Particle("blue",9));
particles.push(Particle("green",8));
particles.push(Particle("yellow",6));
particles.push(Particle("cyan",5));
particles.push(Particle("purple",4));


//Set up functions
setInterval(drawFrame, DRAW_INTERVAL);
c.addEventListener("mousemove",updateMouse);

//Functions
function drawFrame(){
    //update width and height of canvas
    updateCanvas()

    //draw background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c.width + 10, c.height + 10); //+ 10 because of white edges that may appear.
    
    //update and draw particles
    for (let i = 0; i < particles.length; i++) {
        p = particles[i];
        updateParticle(p, i)
        drawParticle(p);
    }

    // particles.forEach(p => {
    //     updateParticle(p);
    //     drawParticle(p);
    // });

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
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.ellipse(p.position.x, p.position.y, 
                p.size, p.size,
                0, 0, 2*Math.PI);
    ctx.fill();
}

//Particle methods
function Particle(color, startSize){
    return {color:color, 
            size:startSize, 
            position:{x:Math.random() * c.width, y:Math.random() * c.height},
            shrinking:false};
}

function updateParticle(p, i){
    if(i == 0){
        p.position = {x: p.position.x - (p.position.x - mousePosition.x)/10,
            y: p.position.y - (p.position.y - mousePosition.y)/10};
    } else{
        p.position = {x: p.position.x - (p.position.x - particles[i - 1].position.x)/10,
            y: p.position.y - (p.position.y - particles[i - 1].position.y)/10};
    }

    let changeValue = .1;
    //p.size -= p.shrinking? -changeValue: changeValue;
    if(p.size <= 0 || p.size >= 10){
        if(!p.shrinking){
            p.position = (mousePosition - p.position)/2;
        }
        p.shrinking = !p.shrinking;
    }
}
