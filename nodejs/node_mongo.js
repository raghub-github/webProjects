// import {mongoClient} from "mongodb";
// const client = new mongoClient('mongodb://127.0.0.1');
// await client.connect();
// const db = client.db('node_mongodb');
// const userCollection = db.collection('user');

// userCollection.insertOne({name: 'Raghu', age: 25});

import { MongoClient }  from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017/'; 
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        
        const database = client.db('testDB'); // Database name
        const collection = database.collection('testCollection'); // Collection name
        
        // Insert a document
        const doc = { name: 'John Doe', age: 30, city: 'New York' };
        const result = await collection.insertOne(doc);
        console.log(`Document inserted with _id: ${result.insertedId}`);
        
        // Find the inserted document
        const foundDoc = await collection.findOne({ name: 'John Doe' });
        console.log('Found Document:', foundDoc);
        
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

run();