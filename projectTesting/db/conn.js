const { default: mongoose } = require("mongoose");
// const mongoose1 = require(mongoose);
mongoose.connect("mongodb://localhost:27017/userdata", {
    useNewUrlParser: true
    // ,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true
}).then(() => {
    console.log(`Connection successful`);
}).catch((err) => {
    console.log(`no connection`);
});