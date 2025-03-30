const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const generatePassword = require('./utils/passwordGenerator');

dotenv.config(); // Charger les variables d’environnement

const app = express();

// 🔹 Middlewares globaux
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// 🔹 Route de test
app.get("/", (req, res) => {
    res.json({ message: "CyberVigilant API is running!" });
});

// Route du générateur de mot de passe
app.get('/api/password/generate', (req, res) => {
    const length = parseInt(req.query.length) || 12;
    const minuscules = req.query.minuscules === 'true';
    const majuscules = req.query.majuscules === 'true';
    const numbers = req.query.numbers === 'true';
    const symbols = req.query.symbols === 'true';
  
    const password = generatePassword(length, minuscules, majuscules, numbers, symbols);
    res.json({ password });
  });

// 🔹 Port du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
