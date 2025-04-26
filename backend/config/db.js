const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://santhosh9726:pLmmuZbmZ8Tvz36x@digital-menu.km55hdy.mongodb.net/?retryWrites=true&w=majority&appName=digital-menu";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let dbInstance; // to reuse same DB connection

async function connectDB() {
  if (dbInstance) {
    return dbInstance;
  }

  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    dbInstance = client.db("digital-menu"); // 👉 Replace with your database name!
    return dbInstance;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit if connection fails
  }
}

module.exports = connectDB;
