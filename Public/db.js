const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017'; // MongoDB URI
const dbName = 'your_database_name'; // Replace with your database name

let db;

async function connectToDatabase() {
    if (db) return db; // Reuse the connection if already established

    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        db = client.db(dbName);
        console.log('Connected to MongoDB successfully!');
        return db;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}

module.exports = { connectToDatabase };
