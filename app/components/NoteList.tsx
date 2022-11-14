import React from "react";
import { Link } from "react-router-dom";
import { noteData } from "~/utils/types";

type Props = {
  notes: noteData[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul className="grid grid-cols-3 gap-6">
      {notes &&
        notes.map((note, index) => (
          <>
            <li
              key={index}
              className="bg-amber-200 hover:bg-amber-300 px-3 py-2 rounded-md hover:scale-110"
            >
              <Link to={note.id}>
                <article>
                  <header>
                    <ul className="flex space-x-10  border-b-2 border-b-slate-500">
                      <li># {index + 1}</li>
                      <li>
                        <time dateTime={note.id}>
                          {note.id &&
                            new Date(note.id).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                        </time>
                      </li>
                    </ul>
                    <h2 className="text-xl text-indigo-700 font-semibold capitalize">
                      {note.title}
                    </h2>
                  </header>
                  <p className="text-lg text-indigo-500">{note.content}</p>
                </article>
              </Link>
            </li>
          </>
        ))}
    </ul>
  );
};

export default NoteList;
