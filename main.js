nose_x = 0;
nose_y = 0;

function preload() {
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    lips = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    v = createCapture(VIDEO);
    v.hide();

    poseNet = ml5.poseNet(v, loaded);
    poseNet.on('pose', poses);
}

function loaded() {
    console.log("Model Loaded!")
}

function poses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x - 175;
        nose_y = results[0].pose.nose.y + 20;
    }
}

function draw() {
    image(v , 0, 0, 500, 500,);
    val = document.getElementById("identity").value;

    if (val == "Boy") {
        image(moustache, nose_x, nose_y, 200, 75)
    }
    else {
        image(lips, nose_x, nose_y, 175, 150)
    }
}

function download() {
    save("Filtered.png");
}