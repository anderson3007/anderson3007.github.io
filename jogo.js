let img;
function preload() {
  img = loadImage('img/run_direito/Run__000.png');
}
function setup() {
  background(50);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
  image(img, 500, 100, 50, 50);
}
