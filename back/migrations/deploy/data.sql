BEGIN;

INSERT INTO "article" ("id", "title", "link") VALUES
(1, 'Le gland, le maître du bitcoin', 'www.legland.fr'),
(2, 'Le gland Partie 2, le retour', 'www.nba.com'),
(3, 'Negan, le vrai héros de The Walking Dead ?', 'www.thewalkingdead.com');


INSERT INTO "user" ("id", "email", "firstname", "lastname", "password") VALUES
(935, 'azerty@oclock.io', 'tony', 'laperche', '12345'),
(936, 'qwerty@oclock.io', 'walter', 'white', 'finger'),
(937, 'bitch@oclock.io', 'jesse', 'pinkman', 'test');


INSERT INTO "category" ("id", "name") VALUES
(1, 'Bitcoin'),
(2, 'Easy Money'),
(3, 'Dollar');


INSERT INTO "quiz" ("id", "title", "category_id") VALUES
(1, 'Bitcoin pour les nuls', 1),
(2, 'Easy Money', 1),
(3, 'Dollar', 2);


INSERT INTO "user_has_quiz" ("id", "scorequiz", "doOrNot","user_id", "quiz_id") VALUES
(1, 0, false, 936, 1),
(2, 20, true, 936, 2),
(3, 50, false, 936, 1);

INSERT INTO "user_has_article" ("id", "readOrNot", "user_id", "article_id") VALUES
(1, false, 936, 1),
(2, true, 936, 2),
(3, false, 937, 3);


INSERT INTO "question" ("id", "thequestion", "linkarticle", "quiz_id") VALUES
(1, 'Qui est le plus fort ? Godzilla ou Sub-Zero ?', 'www.imdb.com', 2),
(2, 'Qui a le plus de bitcoin ? Elon Musk ou Cyril Hanouna', 'www.imdb.com', 1);

INSERT INTO "answer" ("id", "name", "rightOrWrong", "question_id") VALUES
(1, 'Reponse A : Le doigt qui pue', true, 1),
(2, 'Reponse B : Negan', true, 1),
(3, 'Reponse C : Breaking Bad', false, 1),
(4, 'Reponse D : The Night King', false, 1),
(5, 'Reponse A : Godzilla', false, 2),
(6, 'Reponse B : Elon Musk', true, 2),
(7, 'Reponse C : Le grand Tony', true, 2),
(8, 'Reponse D : Cyril Lignac', false, 2);


COMMIT;