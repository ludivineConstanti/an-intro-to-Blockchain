// Modèle Active Record
const db = require('../database');

class Quiz {
    id;
    title;
    category_id;

    set category_id(val) {
        this.categoryId = val;
    }

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAllQuiz() {

        const { rows } = await db.query('SELECT * FROM quiz;');

        return rows.map(allQuiz => new Quiz(allQuiz));
    }

    static async findOneQuiz(id) {
        const { rows } = await db.query('SELECT * FROM quiz WHERE id = $1;', [id]);

        return new Quiz(rows[0]);
    }

}

module.exports = Quiz;