img="";
status="";

function preload(){
    img = loadImage('fruit.webp');
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
    text("Orange",200, 50 );
    noFill();
    stroke("#FF0000");
    rect(190, 40, 200, 150);

    
    fill("#FF0000");
    text("Basket", 50, 200 );
    noFill();
    stroke("#FF0000");
    rect(40, 185, 500, 190);

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