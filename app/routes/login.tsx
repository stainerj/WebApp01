import type { ActionArgs, LinksFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";

import { db } from "~/utils/db.server";
import { badRequest } from "~/utils/request.server";

import stylesUrl from "~/styles/index.css";

import { 
    createUserSession, 
    login
  } from "~/utils/session.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

function validateUrl(url: string) {
  let urls = ["/pizza", "/", "https://remix.run"];
  if (urls.includes(url)) {
    return url;
  }
  return "/pizza";
}

export const action = async ({ request }: ActionArgs) => {
    const form = await request.formData();
    const loginType = form.get("loginType");
    const username = form.get("username");
    const password = form.get("password");
    const redirectTo = validateUrl("/pizza");
    
    //console.log(form.get("redirectTo"))
    if (
      typeof loginType !== "string" ||
      typeof username !== "string" ||
      typeof password !== "string" ||
      typeof redirectTo !== "string"
    ) {
      return badRequest({
        fieldErrors: null,
        fields: null,
        formError: `Form not submitted correctly.`,
      });
    }
  
    const fields = { loginType, username, password };
  
    switch (loginType) {
      case "login": {
        // login to get the user
        // if there's no user, return the fields and a formError
        // if there is a user, create their session and redirect to /jokes
        const user = await login({ username, password });
        console.log({ user });
        if (!user) {
          return badRequest({
            fieldErrors: null,
            fields,
            formError: `Username/Password combination is incorrect`,
          });
        }
        return createUserSession(user.id, redirectTo);
        return badRequest({
          fieldErrors: null,
          fields,
          formError: "Not implemented",
        });
      }
      
      default: {
        return badRequest({
          fieldErrors: null,
          fields,
          formError: `Login type invalid`,
        });
      }
    }
  };

export default function Login() {
  const [searchParams] = useSearchParams();
  return (
    <div className="container">
      <div className="content" data-light="">
        <h1>Login</h1>
        <form method="post">
          <input
            type="hidden"
            name="redirectTo"
            value={
              searchParams.get("redirectTo") ?? undefined
            }
          />
          <fieldset>
            <legend className="sr-only">
              Login or Register?
            </legend>
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                defaultChecked
              />{" "}
              Login
            </label>
            <label>
              <input
                type="radio"
                name="loginType"
                value="register"
              />{" "}
              Register
            </label>
          </fieldset>
          <div>
            <label htmlFor="username-input">Username</label>
            <input
              type="text"
              id="username-input"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              name="password"
              type="password"
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pizza">Menu</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
