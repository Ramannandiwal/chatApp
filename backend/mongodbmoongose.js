// // mongodbmoongose.js
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const dotenv = require('dotenv'); // Import dotenv
// dotenv.config();

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.MONGO_URI, { // Use MONGO_URI from dotenv instead of constructing URI here
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     // Send a ping to confirm a successful connection to a specific collection
// // Send a ping to confirm a successful connection to MongoDB
// await client.db("SARNCHATAPP").command({ ping: 1 });


//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensure that the client will close when you finish/error
   
//   }
// }

// module.exports = { run };
