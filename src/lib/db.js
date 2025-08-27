import Database from "better-sqlite3";

const db = new Database("tasks.db");

// Initialize if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    status INTEGER NOT NULL DEFAULT 0
  )
`).run();

export default db;
