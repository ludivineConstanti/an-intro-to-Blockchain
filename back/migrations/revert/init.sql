-- Revert apo:init from pg

BEGIN;

DROP TABLE "article",
"user",
"quiz",
"user_has_quiz",
"category",
"answer",
"question",
"user_has_article";

COMMIT;
