const fs = require('fs');
const zlib = require('zlib');
/*
var readable = fs.createReadStream(__dirname + '/filler.txt',{encoding:'utf8',highWaterMark:2*1024});
var writable = fs.createWriteStream(__dirname + '/stream-write.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzib = zlib.createGzip(); // Creates a duplex stream
readable.pipe(writable); // returns the writable object

// When parent object is returned, it is called cascading
readable.pipe(gzib).pipe(compressed);
*/

var uncompress = fs.createReadStream(__dirname + '/greet.txt.gz');
var writeUncompressed = fs.createWriteStream(__dirname + '/write-uncompress.txt');
var newGzib = zlib.createGunzip();

uncompress.pipe(newGzib).pipe(writeUncompressed);
