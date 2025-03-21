const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
require("dotenv").config();

console.log("Starting server.js...");

// Initialize Firebase Admin SDK
try {
  console.log("Initializing Firebase...");
  const serviceAccount = require("./serviceAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log("Firebase initialized successfully!");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log("Express app initialized!");

// User Signup Route
app.post("/signup", async (req, res) => {
  console.log("Received /signup request", req.body);
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });
    console.log("User created:", user.uid);
    res.status(201).json({ message: "User created successfully", userId: user.uid });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
