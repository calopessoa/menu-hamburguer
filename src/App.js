import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);

  function toggleMode() {
    setMode(!mode);
  }

  return (
    <div className="App">
      <div
        className={mode ? "icon iconActive" : "icon"}
        onClick={toggleMode}
      >
        <header className="hamburguer hamburguerIcon"></header>
      </div>
      <nav className={mode ? 'menu menuOpen' : 'menu menuClose'}>
        <div className="list">
          <ul className="listItems">
            <li>HOME</li>
            <li>SEARCH</li>
            <li>CART</li>
            <li>CONTACT</li>
            <li>ABOUT US</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
