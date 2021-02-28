const importData = async () => {

    console.log("Début de l'import");

    require('dotenv').config(); // j'aurai toutes les infos de connexion nécessaires

    const { Client } = require('pg');

    const db = new Client(process.env.DATABASE_URL);
     // rien à passer, tout est dans l'environnement

    await db.connect(); // à ne pas oublier ;-) sinon, ça marche pas et ça dit pas pourquoi

    const articles = require('./data/articles.json');

    console.log(`Import de ${articles.length} article`);

    const articleInsert = "INSERT INTO article (title, link) VALUES ($1, $2) RETURNING id;";

    await db.query('DELETE FROM article;');

    for (const art of articles) {
        console.log(`Import de l'a 'article ${art.label}`);
        const result = await db.query(articleInsert, [art.route, art.label]);
        
        // dans result, il y aura une propriété rows qui contiendra nos données
        art.id = result.rows[0].id; // on stocke l'id directement dans la catégorie correspondante
    }

    console.log("Import terminé");

    db.end();

};

importData();