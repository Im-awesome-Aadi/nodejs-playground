const util = require('util');

function Person(fname, lname){
    this.firstname = fname;
    this.lastname = lname;
    this.getName = function(){
        console.log(this.firstname + ' ' + this.lastname);
    }
}

Person.prototype.printName = function(){
    console.log(this.firstname + ' ' + this.lastname);
}

function Student(fname,lname){
    Person.call(this,fname,lname);
    this.rollNo = 'LE-01';
}

util.inherits(Student, Person);
console.log(Student);
var student = new Student('Adi','tya');
student.getName();