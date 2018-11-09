
//var ss = require('classI');

var ventures = [];
// can use ventures.push(venture) to add more
// use ventures.length() to keep track of num ventures

//console.log("hello");

//var user = new Venture("John");
//user.sayHello();
//user.incCost(100);
//user.showCost();

//ventures.push(new Venture("Fern"));
//ventures[0].sayHello();
//console.log(ventures[0].getName());
funds = 10000;
ventures.push(new Farmer());
ventures[0].upgrade();
for (i = 0; i < ventures[0].getInfo().length; ++i){
    console.log(ventures[0].getInfo()[i]);
}
console.log(funds);

