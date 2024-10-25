const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

// Sample user data (in a real app, you'd fetch this from a database)
// Passwords should ideally be hashed
const users = [
  { username: "user1", password: "password1" }, // Removed backticks
  { username: "user2", password: "password2" },
];

// Mock function to simulate user verification (for demo purposes)
const verifyUser = (username, password) => {
  return users.find((u) => u.username === username && u.password === password);
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const user = verifyUser(username, password);

  if (user) {
    res.json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
