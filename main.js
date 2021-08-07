lipsY = 0;
lipsX = 0;

function preload() {
    magenta_lip = loadImage("https://i.postimg.cc/MKPVp1zk/magenta.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500, 500);
    video = createCapture(VIDEO);
    video.size(700, 850);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        lipsX = results[0].pose.nose.x;
        lipsY = results[0].pose.nose.y;
        console.log("lips x = " + lipsX);
        console.log("lips y = " + lipsY);    
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(magenta_lip, lipsX, lipsY, 30, 30);
}

function take_snapshot() {
    save('snaptown_pic.png')
}