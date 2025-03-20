const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

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

// 🔹 Port du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
