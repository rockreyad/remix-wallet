import {
  redirect,
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Link, useCatch, useLoaderData } from "@remix-run/react";
import React from "react";
import NewNote from "~/components/NewNote";
import NoteList from "~/components/NoteList";
import { getNotes, storeNotes } from "~/data/notes";
import { noteData } from "~/utils/types";

const NotesPage = () => {
  const note = useLoaderData<noteData[]>();
  return (
    <main className="bg-indigo-700 h-screen flex flex-col items-center">
      <h1 className="text-2xl font-medium text-white">My Notes</h1>
      <NewNote />
      <div className="py-5 px-5">
        <NoteList notes={note} />
      </div>
    </main>
  );
};

export function ErrorBoundary({ error }) {
  return (
    <main className="bg-amber-500 px-3 py-4 rounded-md flex flex-col items-center w-fit  mx-auto">
      <h1 className="text-2xl text-gray-800 font-bold">
        An error realted to your ntoes Occurred!
      </h1>
      <p>{error.message}</p>
      <p>
        Back to
        <Link className="text-blue-600" to="/">
          safety
        </Link>
        !
      </p>
    </main>
  );
}

//this catches any error responses
export function CatchBoundary() {
  const caughtResponse = useCatch();

  const message = caughtResponse.data?.messsage || "Data not found";
  return (
    <main className="bg-indigo-700 h-screen flex flex-col items-center">
      <NewNote />
      <p className="text-lg text-rose-500">{message}</p>
    </main>
  );
}
export const loader: LoaderFunction = async () => {
  const notes = await getNotes();
  // return notes;
  if (!notes || notes.length === 0) {
    //throw a response never component will render
    throw json(
      { messsage: "Could not find any notes!" },
      {
        status: 404,
        statusText: "Not found",
      }
    );
  }
  return json(notes);
};
export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();

  //const noteData = Object.fromEntries(formData);

  let note = {
    id: "",
    title: formData.get("title"),
    content: formData.get("content"),
  };

  //Add validation...

  if (note.title?.trim().length < 5) {
    return { message: "Title must be at least 5 characters long" };
  }

  //19...
  const exitingNotes = await getNotes();

  note.id = new Date().toISOString();
  const updateNotes = exitingNotes.concat(note);

  await storeNotes(updateNotes);

  return redirect("/notes");
};

export const meta: MetaFunction = () => {
  return {
    title: "My Notes",
    description: "A simple note taking app",
  };
};
export default NotesPage;
