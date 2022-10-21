// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/raghukart', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("We are connected bro...");
});

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speek = function(){
    var greeting = "My name is " +this.name
    console.log(greeting);
}

const kitten = mongoose.model('kitten', kittySchema);
const raghuKittty = new kitten({name: 'raghuKitty'});
const raghuKittty2 = new kitten({name: 'raghuKitty2'});
console.log(raghuKittty.name);
raghuKittty.speek();

raghuKittty.save(function (err, raghuKittty){
    if (err) return console.log(err);
    raghuKittty.speek();
})

raghuKittty2.save(function (err, raghuKittty){
    if (err) return console.log(err);
    raghuKittty.speek();
})

kitten.find({name: "raghuKitty2"}, function(err, kittens){
    if(err) return console.log(err);
    console.log(kittens);
});

