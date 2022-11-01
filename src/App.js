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
        <Link to="/invoices">About</Link> |{" "}
        <Link to="/expenses">Menu</Link>|{" "}
        <Link to="/expenses">What's in the Bean?</Link>
      </nav>
    </div>
  );
}

export default App;
