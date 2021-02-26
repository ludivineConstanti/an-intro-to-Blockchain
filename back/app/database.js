const { Pool } = require('pg');

// Ici, les informations de connexions sont récupérées dans l'environnement
// PGHOST pour l'hôte
// PGUSER pour l'utilisateur
// PGPASSWORD pour le mot de passe
// PGDATABASE pour la base de données

const db = new Pool();

module.exports = db;