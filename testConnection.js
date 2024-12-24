const connectToDatabase = require('./connection.js');

(async () => {
    try {
        const db = await connectToDatabase();
        console.log('Connection successful:', db.databaseName);
    } catch (error) {
        console.error('Failed to connect:', error.message);
    }
})();
