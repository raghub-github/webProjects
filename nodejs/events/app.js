// import events module
const EventEmitter = require('events');
const emmitter = new EventEmitter();

emmitter.on('greet', () => {
    console.log('Hello World');
});

emmitter.emit('greet');