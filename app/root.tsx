import { 
  Links,
  LiveReload, 
  Outlet } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Pizzeria</title>
        <Links />
      </head>
      <body>
        <div>
          <div className="container">
            <h1 className="header">WELCOME TO PIZZA (app.root.tsx)</h1>
          </div>
        </div>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
