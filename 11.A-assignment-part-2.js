// 11.A-assignment-part-2.js
//
// Progressively scales and darkens a yellow square on canvas (from 
// right to left and from bottom to top) as an example of p5.js
// transformation (specifically scale)
//
// Because scale value is always 90%, square theoretically will never 
// reach a size of 0. However, because color value of yellow (both red 
// and green values) is reduced by 5 in each iteration of the loop 
// (255 down to 0), the square becomes progressively darker until it 
// blends into the black background.
//
// Note also the sawtooth edge at the left yellow edge of the graphic 
// visually shows the diminishing effect of repeatedly taking 90% of 
// a value, and then 90% of that, etc.

// colorValue variable starts at 255 for both red and green
let colorValue = 255;

function setup() {
// canvas sized to match canvas in part 1 of assignment
  createCanvas(810, 564);
// black background and no stroke around box
  background(0);
  noStroke();
};
  
function draw() {  
// loop draws diminishing and darker boxes until color value 
// reaches black
  for (i = 255; i > 0; i = i - 5) {
    shrinkSquare ();
  };
// stop the p5.js looping screen redraw after one run of the draw function
  noLoop();
};

// each time the shrinkSquare function is run the square is 90% of its 
// previous size and color value for red and green is reduced by 5
function shrinkSquare () {
// set fill to current colorValue for red and green
  fill(colorValue, colorValue, 0);
// first time square is drawn its top, right and bottom edges are at the 
// edges of the canvas. Throughout the loop, only the top of the square 
// will stay aligned with the edge of the canvas.
  square(246, 0, 564);
// scale next iteration of square to 90% of previous iteration
  scale(.9);
// reduce color values of red and green by 5 for next iteration
  colorValue = colorValue - 5;
}

