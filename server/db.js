const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            userNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(
            "mongodb+srv://raghu:pa55w0rd@cluster0.ztrfy.mongodb.net/quizdb?retryWrites=true&w=majority"
        );
        console.log("Connected to database.");

    } catch (error) {
        console.log("Could not connect to database.", error);
    }
}
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://raghu:<password>@cluster0.ztrfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });