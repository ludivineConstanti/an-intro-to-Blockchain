BEGIN;


DROP TABLE IF EXISTS "article",
"user",
"quiz",
"user_has_quiz",
"category",
"answer",
"question",
"user_has_article";

-- -----------------------------------------------------
-- Table "article"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "article" (
  "id" int PRIMARY KEY,
  "title" text NOT NULL,
  "link" text NOT NULL
);

-- -----------------------------------------------------
-- Table "utilisateur"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user" (
  "id" int PRIMARY KEY,
  "email" text NOT NULL,
  "firstname" text NOT NULL,
  "lastname" text NOT NULL,
  "password" text NOT NULL
);

-- -----------------------------------------------------
-- Table "quiz"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "quiz" (
  "id" int PRIMARY KEY,
  "title" text NOT NULL,
  "category_id" int NOT NULL
);

-- -----------------------------------------------------
-- Table "utilisateur_has_quiz"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_has_quiz" (
  "id" int PRIMARY KEY,
  "scorequiz" int,
  "doOrNot" boolean NOT NULL,
  "user_id" int NOT NULL REFERENCES "user"("id"),
  "quiz_id" int NOT NULL REFERENCES "quiz"("id")
);

-- -----------------------------------------------------
-- Table "categorie"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "category" (
  "id" int PRIMARY KEY,
  "name" text NOT NULL
);

-- -----------------------------------------------------
-- Table "question"
CREATE TABLE IF NOT EXISTS "question" (
  "id" int PRIMARY KEY,
  "thequestion" text NOT NULL,
  "linkarticle" text NOT NULL,
  "quiz_id" int NOT NULL REFERENCES "quiz" ("id")
);

-- -----------------------------------------------------
-- Table "reponse"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "answer" (
  "id" int PRIMARY KEY,
  "name" text NOT NULL,
  "rightOrWrong" boolean NOT NULL,
  "question_id" int NOT NULL REFERENCES "question" ("id")
);

-- -----------------------------------------------------
-- Table "utilisateur_has_article"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_has_article" (
  "id" int PRIMARY KEY,
  "readOrNot" boolean NOT NULL,
  "user_id" int NOT NULL REFERENCES "user"("id"),
  "article_id" int NOT NULL REFERENCES "article"("id")
);

ALTER TABLE "quiz"
  ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");  


COMMIT;