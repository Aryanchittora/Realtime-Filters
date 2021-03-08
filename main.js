function preload() {
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    v = createCapture(VIDEO);
    v.hide();
}

function draw() {
    image(v , 0, 0, 500, 500,);
}