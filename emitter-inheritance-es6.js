const EventEmitter = require('events');

class Fruit extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
    getName = function(){
        return this.name;
    }
}


var apple = new Fruit('apple');

// got this 'on' method from EventEmitter
apple.on('eat', function(name){
    console.log('Let\'s eat this fruit :' + name)
});

// got this 'emit' method from EventEmitter
apple.emit('eat',apple.getName());