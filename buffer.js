var buf = new Buffer.from('ADI','ascii');
console.log(buf.toString());

// V8's internal method to deal with binary data (ES6)
var newBuf = new ArrayBuffer(8);  // Number of bytes to deal with is 8
var viewBuf = new Int32Array(newBuf); // Length of viewBuf is 8*8/32 = 2
viewBuf[0]=25;
console.log(viewBuf.toString());


