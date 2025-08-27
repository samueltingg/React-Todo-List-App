import db from "@/lib/db";
import { NextResponse } from "next/server";

// PATCH /api/tasks/:id → update status or text
export async function PATCH(request, { params }) {
  const { id } = params;
  const { text, status } = await request.json();

  const task = db.prepare("SELECT * FROM tasks WHERE id = ?").get(id);
  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  db.prepare("UPDATE tasks SET text = ?, status = ? WHERE id = ?").run(
    text ?? task.text,
    status ?? task.status,
    id
  );

  const updated = db.prepare("SELECT * FROM tasks WHERE id = ?").get(id);
  return NextResponse.json(updated);
}

// DELETE /api/tasks/:id → remove task
export async function DELETE(request, { params }) {
  const { id } = await params;  // await here

  const task = db.prepare("SELECT * FROM tasks WHERE id = ?").get(id);
  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  db.prepare("DELETE FROM tasks WHERE id = ?").run(id);

  return NextResponse.json({ success: true });
}
