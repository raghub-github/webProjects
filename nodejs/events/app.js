// import events module
const EventEmitter = require('events');
const emmitter = new EventEmitter();

emmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
});

emmitter.emit('greet', 'Raghu');