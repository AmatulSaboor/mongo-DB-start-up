console.log("hi");
const {MongoClient} = require("mongodb");
const uri = "mongodb+srv://Sabahat:sabahat@cluster0.vzs9g.mongodb.net/myDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async (err) =>
    {
        const usersCollection = client.db("myDB").collection("UsersCollection");
        usersCollection.find({}).toArray((err, data)=>{
            console.log(data);
        });
        // console.log(usersCursor);
    });