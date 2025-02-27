const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://b9a10-craftopia.web.app",
      "https://b9a10-craftopia.firebaseapp.com",
    ],
  })
);

app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tjpswkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const productCollection = client.db("artsCrafts").collection("products");
    const subCatCollection = client.db("artsCrafts").collection("sub_cat");

    app.post("/addcraft", async (req, res) => {
      console.log(req.body);
      const result = await productCollection.insertOne(req.body);
      console.log(result);
      res.send(result);
    });

    app.get("/mylist/:email", async (req, res) => {
      console.log(req.params.email);
      const result = await productCollection
        .find({ email: req.params.email })
        .toArray();
      res.send(result);
    });

    app.get("/allartcraft", async (req, res) => {
      const cursor = productCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/subcategory", async (req, res) => {
      const cursor = subCatCollection.find();
      const result = await cursor.toArray();
      res.send(result);
      console.log(result);
    });

    // Update
    app.get("/updateCraft/:_id", async (req, res) => {
      console.log(req.params._id);
      const result = await productCollection.findOne({
        _id: new ObjectId(req.params._id),
      });
      res.send(result);
    });

    app.put("/updateItems/:_id", async (req, res) => {
      console.log(req.params._id);
      const query = { _id: new ObjectId(req.params._id) };
      const data = {
        $set: {
          itemName: req.body.itemName,
          price: req.body.price,
          subCat: req.body.subCat,
          customization: req.body.customization,
          image: req.body.image,
          description: req.body.description,
          name: req.body.fullName,
        },
      };
      const result = await productCollection.updateOne(query, data);
      console.log(result);
      res.send(result);
    });

    // Delete
    app.delete("/delete/:_id", async (req, res) => {
      const result = await productCollection.deleteOne({
        _id: new ObjectId(req.params._id),
      });
      console.log(result);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Arts & Craft server is running.");
});

app.listen(port, () => {
  console.log(`Arts & Craft server in running on port: ${port}`);
});
