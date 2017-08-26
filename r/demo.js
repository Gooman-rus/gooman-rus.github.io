// Set up the canvas dimensions
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.width = 650;
canvas.height = 450;

// Grab the iframe
var inner = document.getElementById('map');

// Get the image
iframe2image(inner, function (err, img) {
  // If there is an error, log it
  if (err) { return console.error(err); }

  // Otherwise, add the image to the canvas
  context.drawImage(img, 0, 0);
});