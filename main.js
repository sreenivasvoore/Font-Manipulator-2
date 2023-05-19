function preload() {
    
}

function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);

    canvas = createCanvas(300, 300);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {

}

function modelLoaded() {
    console.log("Model has been loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}