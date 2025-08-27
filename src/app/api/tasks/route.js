import db from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/tasks
export async function GET() {
  const tasks = db.prepare("SELECT * FROM tasks").all();
  return NextResponse.json(tasks);
}

// POST /api/tasks
export async function POST(request) {
  const { text } = await request.json();
  if (!text) {
    return NextResponse.json({ error: "Task text required" }, { status: 400 });
  }

  const info = db.prepare("INSERT INTO tasks (text, status) VALUES (?, ?)").run(text, 0);
  const newTask = { id: info.lastInsertRowid, text, status: 0 };

  return NextResponse.json(newTask, { status: 201 });
}
