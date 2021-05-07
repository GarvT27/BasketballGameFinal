const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var bg, backgroundImg;
var hoop;


//var gameState = "onHoop";
var score = 0;

function preload(){
    //getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create;
    world = engine.world;
    hoop = createSprite(displayWidth/2, 200 ,60,20);
    //ball = new Ball(displayWidth/2, displayHeight/4)
    

    var bg = createSprite(displayWidth, displayHeight);
}

function draw(){
    background("white")
    //ball.display();
    
    drawSprites()
}




























