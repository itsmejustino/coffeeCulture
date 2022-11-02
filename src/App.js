import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Coffee Culture</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to='/about'>About</Link> |{" "}
        <Link to='/menu'>Menu</Link>|{" "}
        <Link to="/whats-in-the-bean">What's in the Bean?</Link>
      </nav>
    </div>
  );
}

export default App;
