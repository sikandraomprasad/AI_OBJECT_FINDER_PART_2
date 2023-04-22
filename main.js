objects = [];

status = "";

function setup() {

canvas = createCanvas(350, 350);

canvas.position(430, 260);

video = createCapture(VIDEO);

video.hide();

}

function draw() {

image(video, 0, 0, 350, 350);

}

function start() {

Object_Detector = ml5.objectDetector("cocossd", modelLoaded);

document.getElementById("status").innerHTML = "Status : Object Detecting";

Object_Name = document.getElementById("Object_name").value;

}

function modelLoaded() {

console.log("Model Loaded!");

status = true;

}