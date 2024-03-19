function global() {
    document.write(this + "<br/>");
}
var o = {
    "local": function(){
        document.write(this + this.x + "<br/>");
    },"x":10
}
global();
o.local();
//----------------------------------
var student = {
    name: 'Mai Ha Thi',
    getName: function(){
        document.write(this.name);
        return this.name;
    }
};
var _deStudent = student.getName();
document.write('<br/>')
//----------------------------------
var person1 = {name: 'Nhat Minh', age: 12};
var person2 = {name: 'Huu Trung', age: 32};

var sayHello = function(){
    document.write('Hello, '+this.name+'<br/>');
};
var sayGoodbye = function(){
    document.write('Goodbye, '+this.name+'<br/>');
};

// sayHello();
// sayGoodbye();
sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);
//----------------------------------
function step1(temp){
    document.write(temp);
}
function step2(){
    var te = 2;
    step1(te);
}
step2();
var te = 'Global variables';
document.write('<br/>');
//----------------------------------
var checkNumericRange = function (value){
    if(typeof value !== 'number'){
        return false;
    }else{
        return value >= this.minimum && value <= this.maximum;
    }
}

var range = {
    minimum: 10,
    maximum: 20
};

var boundCheckNumericRange = checkNumericRange.bind(range);

var result = boundCheckNumericRange(12);
document.write(result);
document.write('<br/>');
//----------------------------------
function add(a, b, c){
    return a + b + c;
}
document.write(add(1,2,3));
function addCurries(a){
    return (b) => {
        return (c) =>{
            return a + b + c;
        }
    }
}
document.write('<br/>');
document.write(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);
document.write('<br/>')
document.write(ad3);
//----------------------------------
function fOuter(){
    var x = 'Hello';
    function fInner(){
        x = 'World'
    }
    fInner();
    return x;
}
document.write('<br/>'+fOuter());
document.write('<br/>');
//----------------------------------
var myFunction = function(){
    var name = 'Ha Thi';
    var myOtherFunction = function(){
        document.write('I am '+ name);
    };
    document.write(name + '<br/>');
    myOtherFunction();
}
myFunction();
//----------------------------------
var sayBye = function (name){
    var text = 'Bye, '+ name;
    return() => {
        document.write('<br/>' + text);
    }
}
sayBye('Me');
var calledMe = sayBye('Me');
calledMe();
//----------------------------------
class square{
    constructor(width){
        this.width = width;
    }

    getArea(){
        document.write(`<br/> Square o f this ${this.width * this.width} `);
        return this.width * this.width;
    }
}

class cube extends square{
    constructor(width){
        super(width);
    }
    squareArea = this.getArea();
    getVolume(){
        document.write(`<br/> Volume of this ${this.squareArea * this.with}`);
        return this.squareArea * this.width;
    }
}

var myCube = new cube(5);
myCube.getVolume();
document.write('<br/>');
//----------------------------------
class Rect{
    constructor(x, y, w ,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;        
    }

    calcArea(){
        return this.w * this.h;
    }
}

const rect1 = new Rect(1, 2, 3, 4);
document.write(rect1.constructor.name + " " + rect1.constructor.prototype + " " + rect1.calcArea() + "<br/>");
//----------------------------------
class Car {
    constructor() {
        this.speed = 0;
    }

    printSpeed() {
        document.write(this.speed + '<br/>');
    }
}
var car = new Car();
car.instanceMethod = function() {
    document.write('An instance method <br/>');
};

car.speed = 50;
car.printSpeed();
car.instanceMethod();

class Cabriolet extends Car {
    constructor() {
        super();
        this.topState = 'closed';
    }

    openTop() {
        this.topState = 'opened';
        document.write('Top: ' + this.topState + '<br/>');
    }

    closeTop() {
        this.topState = 'closed';
        document.write('Top: ' + this.topState + '<br/>');
    }
}

var cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();

class TeslaCabriolet extends Cabriolet {
    constructor() {
        super();
        this.name = 'Tesla http://www.teslamotors.com/roadster';
    }

    sayName() {
        document.write(this.name + '<br/>');
    }
}

var tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();
//----------------------------------
arr = [1, 2, 3, 4, 5, 6, 7];
function myDisplayer(demoValues){
    document.write(demoValues + " ");
}
function myCaculator(number, myCallback){
    let temp = number %  2;
    if(temp == 0){
        myCallback(number);
    }
}
document.write("Số chẵn trong mảng: ")
for(let item in arr ){
    myCaculator(arr[item], myDisplayer);
}
document.write("<br/>");
//----------------------------------
class Pet {
    constructor(){
        this.ten = 'Mèo';
        this.tiengkeu = 'Meo Meo';
    }

    introduce(){
        return this.ten;
    }

    talk(){
        return this.tiengkeu;
    }
}
var myPet = new Pet;
document.write('Tôi tên là: ' + myPet.introduce() + ', talk(' + myPet.talk() + ')<br/>');

class infoPet extends Pet {
    constructor(){
        super();
        this.loaivat = 'Trên cạn';
    }
    itemPet(){
        return this.loaivat;
    }
}
var dog = new infoPet;
dog.loaivat = 'Thú cưng';
dog.ten = 'Dog';
dog.tiengkeu = 'Gâu Gâu';

document.write('Tôi là động vật: '+ dog.itemPet() + ', tên là: ' + dog.introduce() + ', talk(' + dog.talk() + ')<br/>');