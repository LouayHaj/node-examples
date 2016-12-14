
/**
 * Get arguments
 * Store in args[]
 */
var args = process.argv.slice(2);

/**
 * Check number of arguments
 */
if (args.length !== 2) {
  console.log('Error, need two arguments');
  printHelp();
  return 0;
}

args[0] = args[0].toLowerCase();

if (args[0] !== 'code' && args[0] !== 'decode') {
  console.log('Error, need code/dcode');
  printHelp();
  return 0;
}

if (args[0] === 'code') {
  var buffer = new Buffer(args[1]);
  var coded = buffer.toString('base64');
  console.log(coded);
  return 0;
}

if (args[0] === 'decode') {
  var buffer = new Buffer(args[1], 'base64');
  var decoded = buffer.toString();
}

function printHelp() {
  console.log('********** Usage ***********');
  console.log('node codec.js + code/decode + <string>');
  console.log('****************************');
  args.forEach(function(item, index, arr) {
    console.log(index + ': ' + item);
  });
}