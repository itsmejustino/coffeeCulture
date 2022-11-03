import { Link } from "react-router-dom";
import "./index.css";
import coffeeGif from "../src/assets/coffee.svg";

function App() {
  return (
    <div className="flex flex-wrap justify-between  gap-2 p-3">
      <div className="flex  flex-wrap justify-end items-center gap-4">
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
      <nav>
        <ul className="flex justify-between gap-2">
          <li>
            <Link to="/about">
              <button className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-300">
                About
              </button>
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <button className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-300">
                Menu
              </button>
            </Link>
          </li>
          <li>
            <Link to="/whats-in-the-bean">
              <button className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-300">
                Whats in the Bean?
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
