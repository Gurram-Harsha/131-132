img="";
status="";

function preload(){
    img = loadImage('desk.avif');
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
    text("Laptop", 155, 120 );
    noFill();
    stroke("#FF0000");
    rect(150, 100, 350, 250);

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