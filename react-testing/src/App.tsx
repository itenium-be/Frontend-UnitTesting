


export function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}



function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/favicon.png" style={{marginRight: 18, width: 24}} />
          React Testing
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">Storybook</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
