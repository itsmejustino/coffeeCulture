import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import coffeeGif from "../assets/coffee.svg";

function Nav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white justify-between">
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
        <div>
          <div className="flex justify-between py-3 md:py-5 md:block">
          <div className="flex flex-wrap justify-end items-center gap-4">
        <img
          src={coffeeGif}
          alt="coffee-gif"
          styles={{
            height: "50px",
            width: "50px",
            backgroundColor: "transparent",
          }}
        />
        <h1 >Coffee Culture</h1>
      </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex justify-start pb-2 mt-4 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y- md:flex md:space-x-4 md:space-y-0">
              <li >
                <Link to="/">
                  <button className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-300">
                    About
                  </button>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/menu">
                  <button className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-300">
                    Menu
                  </button>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/whats-in-the-bean">
                  <button className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-300">
                    Whats in the Bean?
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;