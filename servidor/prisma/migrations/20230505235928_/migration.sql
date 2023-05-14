/*
  Warnings:

  - Added the required column `observacao` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamanhodoce` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodoce` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipodoce" TEXT NOT NULL,
    "tamanhodoce" TEXT NOT NULL,
    "datahorario" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observacao" TEXT NOT NULL
);
INSERT INTO "new_user" ("id", "nome") SELECT "id", "nome" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
