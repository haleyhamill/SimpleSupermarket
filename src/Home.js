import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Home() {
  <input
    type="text"
    placeholder="Enter your name"
    onChange={() => console.log("change!")}
  />;

  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>SuperM</em> with our easy to use app,
          and get your products delivered straight to your doorstep.
        </p>
        <Link to="/products" className="btn btn-default">
          Start shopping
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg"
        width="350"
        height="240"
        className="rounded home-image"
        alt=""
      />
    </div>
  );
}
