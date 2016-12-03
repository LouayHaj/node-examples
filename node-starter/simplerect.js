var rect = {
    perimeter: function(l, b) {
      return 2 * (l + b);
    },
    area: function(l, b) {
      return l * b 
    }
}

function solveRect(l, b) {
  if (l <= 0 || b <= 0) {
    console.log('Rectangle dimensions should be greater than 0. ' + 'l = ' + l + ", b = " + b);
    return;
  }
  console.log('Perimeter: ' + rect.perimeter(l, b));
  console.log('Area: ' + rect.area(l, b));
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);