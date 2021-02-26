BEGIN;

INSERT INTO "article" ("title", "link") VALUES
('Le gland, le maître du bitcoin', 'www.legland.fr'),
('Le gland Partie 2, le retour', 'www.nba.com'),
('Negan, le vrai héros de The Walking Dead ?', 'www.thewalkingdead.com');


INSERT INTO "user" ("email", "firstname", "lastname", "password") VALUES
('azerty@oclock.io', 'tony', 'laperche', '12345'),
('qwerty@oclock.io', 'walter', 'white', 'finger'),
('bitch@oclock.io', 'jesse', 'pinkman', 'test');


INSERT INTO "category" ("name") VALUES
('Bitcoin'),
('Easy Money'),
('Dollar');


INSERT INTO "quiz" ("title", "category_id") VALUES
('Bitcoin pour les nuls', 1),
('Easy Money', 1),
('Dollar', 2);


INSERT INTO "user_has_quiz" ("scorequiz", "doOrNot","user_id", "quiz_id") VALUES
(0, false, 1, 1),
(20, true, 1, 2),
(50, false, 2, 1);

INSERT INTO "user_has_article" ("readOrNot", "user_id", "article_id") VALUES
(false, 1, 1),
(true, 1, 2),
(false, 2, 3);


INSERT INTO "question" ("thequestion", "linkarticle", "quiz_id", "article_id") VALUES
('Qui est le plus fort ? Godzilla ou Sub-Zero ?', 'www.imdb.com', 2, 2),
('Qui a le plus de bitcoin ? Elon Musk ou Cyril Hanouna', 'www.imdb.com', 1, 3);

INSERT INTO "answer" ("name", "rightOrWrong", "question_id") VALUES
('Reponse A : Le doigt qui pue', true, 1),
('Reponse B : Negan', true, 1),
('Reponse C : Breaking Bad', false, 1),
('Reponse D : The Night King', false, 1),
('Reponse A : Godzilla', false, 2),
('Reponse B : Elon Musk', true, 2),
('Reponse C : Le grand Tony', true, 2),
('Reponse D : Cyril Lignac', false, 2);


COMMIT;