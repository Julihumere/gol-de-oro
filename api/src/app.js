const express = require("express");
const { createPool } = require("mysql2/promise");
const { config } = require("dotenv");
config();

const app = express();

app.use(express.json());

const pool = createPool({
  host: process.env.GOLDB_HOST || "127.0.0.1", // Conectar a localhost
  user: "root",
  password: process.env.GOLDB_ROOT_PASSWORD,
  database: process.env.GOLDB_DATABASE,
  port: process.env.GOLDB_LOCAL_PORT || 3307, // Puerto expuesto por Docker
});

pool.query(
  "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))"
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ message: "Y AHORA?", date: result[0] });
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
  res.json({ message: "User created", id: result[0].insertId });
});

app.get("/users", async (req, res) => {
  const [users] = await pool.query("SELECT * FROM users");
  res.json(users);
});

app.listen(process.env.NODE_DOCKER_PORT, () => {
  console.log(`Server is running on port ${process.env.NODE_DOCKER_PORT}`);
});

module.exports = app;
