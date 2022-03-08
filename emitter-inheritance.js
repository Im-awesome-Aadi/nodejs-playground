const EventEmitter = require('events');
const util = require('util');

console.log(EventEmitter);
function Fruit(name){
    
    this.name = name;
}

util.inherits(Fruit, EventEmitter);

Fruit.prototype.getName = function(){
    return this.name;
}

var apple = new Fruit('apple');

// got this 'on' method from EventEmitter
apple.on('eat', function(name){
    console.log('Let\'s eat this fruit :' + name)
});

// got this 'emit' method from EventEmitter
apple.emit('eat',apple.getName());