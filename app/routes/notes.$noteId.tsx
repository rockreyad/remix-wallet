import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import { getNotes } from "~/data/notes";
import { noteData } from "~/utils/types";

type Props = {
  params: { noteId: string };
};

export const loader = async ({ params }: Props) => {
  const note = await getNotes();
  const nodeId = params.noteId; // identifier for the note

  const selectedNote: noteData = note.find(
    (note: noteData) => note.id === nodeId
  );

  if (!selectedNote) {
    throw json(
      { message: "Could not find the note! " + nodeId },
      { status: 404 }
    );
  }
  return selectedNote;
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data?.title || "Note Details",
    description: data?.content,
  };
};
const NoteDetailsPage = () => {
  const note = useLoaderData<noteData>();
  return (
    <main className="bg-indigo-800 px-4 py-3 rounded-lg flex flex-col items-center">
      <header>
        <nav>
          <Link className="text-gray-300 font-light" to={"/notes"}>
            Back to all notes
          </Link>
          <h1 className="uppercase text-2xl font-semibold text-white">
            {note.title}
          </h1>
        </nav>
      </header>

      <p className="text-gray-300 font-light">{note.content}</p>
    </main>
  );
};

export default NoteDetailsPage;
