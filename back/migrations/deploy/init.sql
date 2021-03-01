BEGIN;

DROP TABLE IF EXISTS "user",
"category",
"quiz",
"user_made_quiz",
"answer",
"question",
"user_read_article";

-- -----------------------------------------------------
-- Table "category"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "category" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "fr_name" text NOT NULL,
  "en_name" text NOT NULL
);

-- -----------------------------------------------------
-- Table "quiz"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "quiz" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "fr_title" text NOT NULL,
  "en_title" text NOT NULL,
  "category_id" int NOT NULL
);

-- -----------------------------------------------------
-- Table "question"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "question" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "fr_statement" text NOT NULL,
  "fr_article_link" text NOT NULL,
  "fr_article_title" text NOT NULL,
  "fr_justification" text NOT NULL,
  "en_statement" text NOT NULL,
  "en_article_link" text NOT NULL,
  "en_article_title" text NOT NULL,
  "en_justification" text NOT NULL,
  "quiz_id" int NOT NULL REFERENCES "quiz" ("id")
);

-- -----------------------------------------------------
-- Table "answer"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "answer" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "fr_name" text NOT NULL,
  "en_name" text NOT NULL,
  "goodAnswer" boolean NOT NULL,
  "question_id" int NOT NULL REFERENCES "question" ("id")
);

-- -----------------------------------------------------
-- Table "user"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL,
  "firstname" text NOT NULL,
  "lastname" text NOT NULL,
  "password" text NOT NULL
);

-- -----------------------------------------------------
-- Table "user_made_quiz"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_made_quiz" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "scorequiz" int,
  "done" boolean NOT NULL,
  "user_id" int NOT NULL REFERENCES "user"("id"),
  "quiz_id" int NOT NULL REFERENCES "quiz"("id")
);

-- -----------------------------------------------------
-- Table "user_read_article"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_read_article" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "read" boolean NOT NULL,
  "user_id" int NOT NULL REFERENCES "user"("id"),
  "question_id" int NOT NULL REFERENCES "question"("id")
);

ALTER TABLE "quiz"
  ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");
COMMIT;