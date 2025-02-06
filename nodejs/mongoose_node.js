import mongoose from 'mongoose';

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/node_mongoose_db');
    mongoose.set('debug', true);
    console.log('Connected to MongoDB');
} catch (error) {
    console.error(error);
    process.exit();
};

// Creating Schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    // createdAt: { type: Date, default: Date.now() },
    // updatedAt: { type: Date, default: Date.now() }
}, {
    timestamps: true
});

// Middleware
userSchema.pre(["updateOne", "updateMany", "findOneAndUpdate", "save"], function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

// Create a model
const Users = mongoose.model("user", userSchema);

// await Users.create({ name: "Raghu Bhunia", age: 25, email: "raghu@gmail.com" });
await Users.updateOne({ email: "raghu@gmail.com" }, { $set: { name: "Suhita Ghosh" } });

await mongoose.connection.close();