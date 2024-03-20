let particles = [];
const num = 500;

const noiseScale = 0.01; //factor

function setup() {
  createCanvas(1080, 1080);

  for(let i = 0; i < num; i++)
  {
    particles.push(createVector(random(width), random(height)))
  }

  stroke(255);
}

function draw() {
  background(250, 10);
  for(let i = 0; i < num; i++)
  {
    let p = particles[i];
    // let r = 
    // let g =
    // let b = 
    let particleColour = map(p.x, 0, width, 0, 255);
    stroke(particleColour, 0, 0);
   
    point(p.x, p.y)

    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p))
    {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function onScreen(v)
{
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;


}