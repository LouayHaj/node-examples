var rect = require('./rectangle-2');

function solveRect(l, b) {
  rect(l, b, function(err, rect) {
    if (err) {
      console.log(err);
    } else {
      console.log('Perimeter: ' + rect.perimeter());
      console.log('Area: ' + rect.area());
    }
  })
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);