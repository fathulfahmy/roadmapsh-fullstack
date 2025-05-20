const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`DATA RECEIVED Name: ${name} ID: ${id}`);
});
customEmitter.on("response", () => {
  console.log(`event logged`);
});

customEmitter.emit("response", "John", 34);
