import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
    return (
      <div className="container">
        <div className="content">
          <nav>
            <ul>
              <li>
                <Link to="pizza" className="btn_link">View Menu</Link>
              </li>
            </ul> 
            <ul> 
              <li>
                <Link to="/login" className="btn_link">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }