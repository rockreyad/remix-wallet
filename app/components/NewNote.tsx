import { Form } from "@remix-run/react";

const NewNote = () => {
  return (
    <Form
      method="post"
      className="bg-white p-7 rounded-md flex flex-col space-y-4 w-2/4"
    >
      <label htmlFor="title" className="font-medium text-lg text-indigo-500">
        Title
      </label>

      <input
        type="text"
        id="title"
        name="title"
        className="p-2 rounded-md bg-indigo-300"
        required
      />

      <label htmlFor="content" className="font-medium text-lg text-indigo-500">
        Content
      </label>
      <textarea
        id="content"
        name="content"
        required
        className="p-2 rounded-md  bg-indigo-300"
      />
      <div className="grid justify-items-center">
        <button className="bg-blue-600 hover:bg-blue-500 px-3 py-3 text-lg text-white font-semibold rounded-md">
          Add Note
        </button>
      </div>
    </Form>
  );
};

export default NewNote;
