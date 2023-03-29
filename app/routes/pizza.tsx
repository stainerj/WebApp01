import { Outlet, Link } from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function PizzaRoute() {
  return (
    <div>
      <h1>PIZZA - app/routes/pizza.tsx</h1>
      <main>
        <Outlet />
      </main>
      <div>
      
    </div>
    </div>
    
  );
}