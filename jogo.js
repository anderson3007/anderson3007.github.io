let img;
function preload() {
  img = loadImage('img/run_direito/Run__direito.png');
}
function setup() {
  background(50);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
  image(img, 10, 10, 50, 50);
}
