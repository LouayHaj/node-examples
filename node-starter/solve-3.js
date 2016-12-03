var argv = require('yargs')
  .usage('Usage: node $0 --l=[num] --b=[num]')
  .demand(['l', 'b'])
  .argv;

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

solveRect(argv.l, argv.b);