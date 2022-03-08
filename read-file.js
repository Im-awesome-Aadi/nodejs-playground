const fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt','utf8');
console.log(greet);

var greetAsync = fs.readFile(__dirname + '/greet.txt',
    function(err,data){
        if(!err){
            console.log(data.toString());

        }else{
            console.log("Couldn't find the file")
        }
});

