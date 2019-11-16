let img;
function preload() {
  im = loadImage('img/run_direito/Ru.png');
}
function setup() {
  createCanvas(1200, 552);
  background(50);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
  image(img, 500, 100, 50, 50);
}
