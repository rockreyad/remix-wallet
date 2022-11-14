import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import styles from "~/styles/app.css";
import MainNavigation from "./components/MainNavigation";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function CatchBoundary() {
  const caughtResponse = useCatch();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{caughtResponse.statusText}</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="bg-amber-500 px-3 py-4 rounded-md flex flex-col items-center w-fit  mx-auto">
          <h1 className="text-2xl text-gray-800 font-bold">
            {caughtResponse.statusText}
          </h1>
          <p>{caughtResponse.data?.message || "Something went wrong!"}</p>
          <p>
            Back to{" "}
            <Link className="text-blue-600" to="/">
              safety
            </Link>
            !
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An Error Occurred!</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="bg-amber-500 px-3 py-4 rounded-md flex flex-col items-center w-fit  mx-auto">
          <h1 className="text-2xl text-gray-800 font-bold">
            An error Occurred!
          </h1>
          <p>{error.message}</p>
          <p>
            Back to{" "}
            <Link className="text-blue-600" to="/">
              safety
            </Link>
            !
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
