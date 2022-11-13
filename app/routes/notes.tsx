import { redirect, ActionFunction, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import React from "react";
import NewNote from "~/components/NewNote";
import { getNotes, storeNotes } from "~/data/notes";
import { noteData } from "~/utils/types";

const NotesPage = () => {
  return (
    <main className="bg-indigo-700 h-screen flex flex-col items-center">
      <h1 className="text-2xl font-medium text-white">My Notes</h1>
      <NewNote />
    </main>
  );
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();

  const noteData = Object.fromEntries(formData);

  // let noteData = {
  //   id: "",
  //   title: formData.get("title"),
  //   content: formData.get("content"),
  // };

  //Add validation...

  //19...
  const exitingNotes = await getNotes();

  noteData.id = new Date().toISOString();
  const updateNotes = exitingNotes.concat(noteData);

  await storeNotes(updateNotes);

  return redirect("/notes");
};
export default NotesPage;
