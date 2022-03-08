var temp = require('./emitter-inheritance')
var Emitter = require('events')
var emtr = new Emitter();
var fs = require('fs');
emtr.on('push', function(data){
    console.log(data + " I am pushed baby");
});
var emtr2 = new Emitter();
emtr.emit('push','hello');
//emtr.emit('push');
//let getName = require('./name');
//let util = require('module');
//util.log("Hello");
//getName.x("Aditya");