-- CreateTable
CREATE TABLE "Cargo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "departamentoId" INTEGER NOT NULL,
    "cargoId" INTEGER,
    "create" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "update" DATETIME,
    CONSTRAINT "Funcionario_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Funcionario_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Funcionario" ("cpf", "create", "departamentoId", "email", "id", "nome", "telefone", "update") SELECT "cpf", "create", "departamentoId", "email", "id", "nome", "telefone", "update" FROM "Funcionario";
DROP TABLE "Funcionario";
ALTER TABLE "new_Funcionario" RENAME TO "Funcionario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_titulo_key" ON "Cargo"("titulo");
