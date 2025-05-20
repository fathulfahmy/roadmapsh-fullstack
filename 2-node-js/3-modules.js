const sayHi = require("./5-utils");
const { john, peter } = require("./4-names");

sayHi("susan");
sayHi(john);
sayHi(peter);

const data = require("./6-alternative-flavor");
console.log(data);

require("./7-mind-grenade");