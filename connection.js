const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb://localhost:27017';
const dbName = 'MaidFinderDB';

const connectToDatabase = async() => {
    try {
        const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        return client.db(dbName);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};
module.exports = connectToDatabase;