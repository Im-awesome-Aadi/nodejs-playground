const Emitter = require('events');
var events = new Emitter();
events.on('push',function(){
    console.log("Push me harder baby !!!");
});
events.emit('push');
console.log(events)