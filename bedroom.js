img="";
status="";

function preload(){
    img = loadImage('bedroom.webp');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(450, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 640, 420 );
    fill("#FF0000");
    text("Bed", 155, 75 );
    noFill();
    stroke("#FF0000");
    rect(150, 60, 350, 350);

    
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
}