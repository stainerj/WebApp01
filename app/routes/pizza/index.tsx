import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function PizzaIndexRoute() {
    return (
      <div>
        <p>
         <div className="container">
            <h1 className="menu-header">Pizza Menu</h1>
            <p className="services_text">Choose from our selection below.</p>
            <div className="columns">
               <div className="rows">
                  <div className="col-md-4">
                     <div><img src="test-image.png" className="services_img"></img></div>
                     <div className="btn_main"><a href="#">Marinara</a></div>
                     <div className="btn_add"><a href="#">Add</a></div>
                  </div>
                  <div className="col-md-4">
                     <div><img src="test-image.png" className="services_img"></img></div>
                     <div className="btn_main"><a href="#">Margherita</a></div>
                     <div className="btn_add"><a href="#">Add</a></div>
                  </div>
                  <div className="col-md-4">
                     <div><img src="test-image.png" className="services_img"></img></div>
                     <div className="btn_main"><a href="#">Napoletana</a></div>
                     <div className="btn_add"><a href="#">Add</a></div>
                  </div>
				          <div className="col-md-4">
                     <div><img src="test-image.png" className="services_img"></img></div>
                     <div className="btn_main"><a href="#">Capricciosa</a></div>
                     <div className="btn_add"><a href="#">Add</a></div>
                  </div>
				          <div className="col-md-4">
                     <div><img src="test-image.png" className="services_img"></img></div>
                     <div className="btn_main"><a href="#">Quatro Formaggi</a></div>
                     <div className="btn_add"><a href="#">Add</a></div>
                  </div>
				          <div className="col-md-4">
                     <div><img src="test-image.png" className="services_img"></img></div>
                     <div className="btn_main"><a href="#">Romana</a></div>
                     <div className="btn_add"><a href="#">Add</a></div>
                  </div>
               </div>
            </div>
         </div>
        </p>
      </div>
   );
}