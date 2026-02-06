const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const DEMO_USERNAME = "admin";
const DEMO_PASSWORD = "password";
const DEMO_TOKEN = "demo.jwt.token-123456"; // token bidon 


app.get("/public/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});


app.post("/auth/login", (req, res) => {
  const { username, password } = req.body || {};
  if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
    return res.json({ token: DEMO_TOKEN });
  }
  return res.status(401).json({ error: "Invalid credentials" });
});


function requireAuth(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (token === DEMO_TOKEN) return next();
  return res.status(401).json({ error: "Unauthorized" });
}


app.get("/secure/data", requireAuth, (req, res) => {
  res.json({
    message: "Tu as accédé à une ressource protégée.",
    data: [{ id: 1, note: "Exemple 1" }, { id: 2, note: "Exemple 2" }],
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Demo backend http://localhost:${PORT}`);
});

// npm i
// node server.js