const fs = require('fs');

var readable = fs.createReadStream(__dirname + '/filler.txt',{encoding:'utf8',highWaterMark:2*1024});

var writable = fs.createWriteStream(__dirname + '/stream-write.txt');
console.log(__filename);
console.log(typeof writable);
readable.on('data',function(chunk){
    
    writable.write(chunk);
});