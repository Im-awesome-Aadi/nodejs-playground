function greet(callback){

    var data ={
        name : 'Aadi',
        age : '21'
    }
    callback(data);
}

greet(function(data){
    console.log('Hello ' + data.name);
});

greet(function(data){
    console.log('Hello ' + data.age + ' yr oldie');
});