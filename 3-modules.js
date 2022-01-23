// CommonJS, every file is module(by default)
// Modules - Encapsulated Code (only share minimum (what we want))

const names = require('./4-names')  //this stores names object
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

console.log("hello from mod3");
require('./7-mind-grenade')
//console.log(names);
console.log(data);
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)