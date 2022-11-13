import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main
      id="content"
      className="h-screen flex flex-col mx-auto bg-blue-600 p-4 space-y-10 items-center"
    >
      <h1 className="text-5xl text-white leading-10 tracking-wider">
        A Better way of keeping track of your notes
      </h1>
      <p className="text-base text-white">
        Try our early beta and never loose track of your notes again!
      </p>
      <p id="cta">
        <Link
          className="bg-amber-600 text-white text-2xl font-semibold hover:bg-amber-500 hover:cursor-pointer px-3 py-2 rounded-md"
          to="/notes"
        >
          Try now!
        </Link>
      </p>
    </main>
  );
}
