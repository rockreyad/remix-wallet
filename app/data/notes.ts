import fs from "fs/promises";
import { noteData } from "~/utils/types";

export async function getNotes() {
  const notes = await fs.readFile("notes.json", { encoding: "utf-8" });
  const data = JSON.parse(notes);
  const notesArray = data.notes ?? [];
  return notesArray;
}

export function storeNotes(notes) {
  return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}
